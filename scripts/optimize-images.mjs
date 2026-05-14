import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

/** Optimizes JPEGs and converts listed PNGs to JPG in `src/imports/`. The repo commits the JPG outputs so builds work without running this script; run after replacing source PNGs or adding new assets. */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const importsDir = path.join(root, "src", "imports");

const maxWidth = 1920;
const jpegOptions = { quality: 82, mozjpeg: true };

function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function optimizeJpegInPlace(filename) {
  const full = path.join(importsDir, filename);
  if (!fs.existsSync(full)) {
    console.warn(`skip (missing): ${filename}`);
    return;
  }
  const before = fs.statSync(full).size;
  const tmp = `${full}.opt.tmp`;
  await sharp(full)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg(jpegOptions)
    .toFile(tmp);
  fs.renameSync(tmp, full);
  const after = fs.statSync(full).size;
  console.log(`${filename}: ${kb(before)} -> ${kb(after)}`);
}

async function convertPngToJpeg(pngName, jpgName) {
  const fullPng = path.join(importsDir, pngName);
  const fullJpg = path.join(importsDir, jpgName);
  if (!fs.existsSync(fullPng)) {
    console.warn(`skip (missing): ${pngName}`);
    return;
  }
  const before = fs.statSync(fullPng).size;
  await sharp(fullPng)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg(jpegOptions)
    .toFile(fullJpg);
  fs.unlinkSync(fullPng);
  const after = fs.statSync(fullJpg).size;
  console.log(`${pngName} -> ${jpgName}: ${kb(before)} -> ${kb(after)}`);
}

async function writePublicHero() {
  const src = path.join(importsDir, "hero_home_source.png");
  const outDir = path.join(root, "public", "images");
  if (!fs.existsSync(src)) {
    console.warn("skip public hero (missing): hero_home_source.png");
    return;
  }
  fs.mkdirSync(outDir, { recursive: true });
  const webpPath = path.join(outDir, "hero.webp");
  const jpgPath = path.join(outDir, "hero.jpg");
  const meta = await sharp(src).rotate().metadata();
  const W = meta.width ?? 0;
  const H = meta.height ?? 0;
  if (!W || !H) {
    console.warn("skip public hero: could not read dimensions");
    return;
  }
  const top = Math.round(H * 0.49);
  const cropH = H - top;
  const insetX = Math.round(W * 0.06);
  const cropW = W - insetX * 2;
  const base = sharp(src)
    .rotate()
    .extract({ left: insetX, top, width: cropW, height: cropH })
    .resize({ width: 1920, height: 1080, fit: "cover", position: "centre" });
  await base.clone().webp({ quality: 86 }).toFile(webpPath);
  await base.clone().jpeg({ quality: 86, mozjpeg: true }).toFile(jpgPath);
  console.log(`public/images/hero.webp + hero.jpg (from hero_home_source.png, elbows-down crop)`);
}
async function main() {
  console.log(`Optimizing images in ${importsDir} (max width ${maxWidth}px)\n`);

  await optimizeJpegInPlace("_A7_2913.jpg");
  await optimizeJpegInPlace("_A7_2924.jpg");

  await convertPngToJpeg("new_horizon_crossfit_gym_inside.png", "new_horizon_crossfit_gym_inside.jpg");
  await convertPngToJpeg("new_horizon_crossfit_coach_sai_asghari.png", "new_horizon_crossfit_coach_sai_asghari.jpg");

  await writePublicHero();

  console.log("\nDone. Update any imports from .png to .jpg for converted files.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
