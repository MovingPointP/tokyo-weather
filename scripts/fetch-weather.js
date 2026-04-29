const { writeFileSync } = require("fs");
const { join } = require("path");

const API_URL =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=35.68&longitude=139.69" + // 東京の緯度経度
  "&hourly=temperature_2m,precipitation_probability,weather_code" + // 気温, 降水確率, 天気コードを取得
  "&timezone=Asia%2FTokyo" + // タイムゾーン: Asia/Tokyo
  "&forecast_days=1"; // 今日のデータのみ取得

async function main() {
  // Open-Meteo APIの呼び出し
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();

  // フォーマット整形
  const hourly = data.hourly.time.map((isoTime, i) => ({
    hour: parseInt(isoTime.slice(11, 13), 10),
    temp: Math.ceil(data.hourly.temperature_2m[i]),
    precip: data.hourly.precipitation_probability[i],
    weather: data.hourly.weather_code[i],
  }));

  const output = {
    updatedAt: new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }),
    hourly,
  };

  // JSON出力
  writeFileSync(
    join(__dirname, "../src/data/weather.json"),
    JSON.stringify(output, null, 2),
  );

  console.log("weather.json saved.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
