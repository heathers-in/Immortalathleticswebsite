import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

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
