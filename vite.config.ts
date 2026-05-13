import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// #region agent log
const _agentLogPath = path.join(__dirname, 'debug-b03066.log')
const _agentIngest =
  'http://127.0.0.1:7858/ingest/6472b39c-520f-49ce-aaaa-0754da95432c'
let _agentHmrSeq = 0
function _agentDebugLog(
  location: string,
  message: string,
  data: Record<string, unknown>,
  hypothesisId: string,
) {
  const payload = {
    sessionId: 'b03066',
    location,
    message,
    data,
    timestamp: Date.now(),
    hypothesisId,
  }
  const line = `${JSON.stringify(payload)}\n`
  try {
    fs.appendFileSync(_agentLogPath, line, 'utf8')
  } catch {
    /* ignore */
  }
  fetch(_agentIngest, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Debug-Session-Id': 'b03066',
    },
    body: JSON.stringify(payload),
  }).catch(() => {})
}

/** Correlates HMR / server lifecycle with Windows libuv `UV_HANDLE_CLOSING` crashes (debug session b03066). */
function debugViteUvHypothesesPlugin() {
  return {
    name: 'debug-vite-uv-hypotheses',
    buildStart(opts: { command?: string }) {
      _agentDebugLog(
        'vite.config.ts:buildStart',
        'vite buildStart',
        {
          command: opts.command ?? 'unknown',
          node: process.version,
          platform: process.platform,
          pid: process.pid,
        },
        'H3',
      )
    },
    configureServer(server: import('vite').ViteDevServer) {
      _agentDebugLog(
        'vite.config.ts:configureServer',
        'vite dev server configuring',
        {
          node: process.version,
          platform: process.platform,
          pid: process.pid,
          argv0: process.argv[0]?.slice(-40),
          argvTail: process.argv.slice(1, 5).join(' '),
        },
        'H1',
      )
      server.httpServer?.once('listening', () => {
        const addr = server.httpServer?.address()
        _agentDebugLog(
          'vite.config.ts:listening',
          'http server listening',
          { address: typeof addr === 'object' && addr ? addr : String(addr) },
          'H1',
        )
      })
    },
    handleHotUpdate(ctx: { file: string; timestamp?: number }) {
      const n = ++_agentHmrSeq
      const file = ctx.file.replace(/\\/g, '/')
      _agentDebugLog(
        'vite.config.ts:handleHotUpdate',
        'hmr',
        {
          n,
          file,
          ts: ctx.timestamp,
          isWinAbs: /^[A-Za-z]:\//.test(file) || file.includes('/@fs/'),
          isCss: file.endsWith('.css'),
        },
        'H2',
      )
    },
  }
}
// #endregion

_agentDebugLog(
  'vite.config.ts:module',
  'vite.config evaluated',
  { node: process.version, platform: process.platform, pid: process.pid },
  'H1',
)

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

/** Vite runs HTML through the JS transform when Sec-Fetch-Dest is "script"; some clients (e.g. tooling) send that for /index.html and break import-analysis. */
function htmlScriptDestWorkaround() {
  return {
    name: 'html-script-sec-fetch-dest-workaround',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const raw = req.url
        if (!raw) return next()
        try {
          const pathname = decodeURIComponent(raw.replace(/[?#].*/, ''))
          if (pathname.endsWith('.html') && req.headers['sec-fetch-dest'] === 'script') {
            delete req.headers['sec-fetch-dest']
          }
        } catch {
          /* ignore malformed URL */
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    debugViteUvHypothesesPlugin(),
    htmlScriptDestWorkaround(),
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
