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

async function main() {
  console.log(`Optimizing images in ${importsDir} (max width ${maxWidth}px)\n`);

  await optimizeJpegInPlace("_A7_2913.jpg");
  await optimizeJpegInPlace("_A7_2924.jpg");

  await convertPngToJpeg("new_horizon_crossfit_gym_inside.png", "new_horizon_crossfit_gym_inside.jpg");
  await convertPngToJpeg("new_horizon_crossfit_coach_sai_asghari.png", "new_horizon_crossfit_coach_sai_asghari.jpg");

  console.log("\nDone. Update any imports from .png to .jpg for converted files.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
