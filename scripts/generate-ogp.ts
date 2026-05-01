import { chromium } from "playwright";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const SCALE = 1.1;

async function main() {
  // 設定
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: {
      width: Math.round(1200 / SCALE),
      height: Math.round(630 / SCALE),
    },
    deviceScaleFactor: SCALE,
  });

  const page = await context.newPage();

  await page.goto("http://localhost:3000/tokyo-weather/ogp", { waitUntil: "networkidle" });

  // スクリーンショット取得
  await page.screenshot({
    path: join(__dirname, "../out/ogp.png"),
  });

  await browser.close();
  console.log("ogp.png saved.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
