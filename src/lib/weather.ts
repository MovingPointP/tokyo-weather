import { readFileSync } from "fs";
import { join } from "path";

type HourlyItem = {
  hour: number;
  temp: number;
  precip: number;
  weather: number;
};

type WeatherData = {
  updatedAt: string;
  hourly: HourlyItem[];
};

export function loadWeatherData(): WeatherData {
  const raw = readFileSync(
    join(process.cwd(), "src/data/weather.json"),
    "utf-8",
  );
  return JSON.parse(raw);
}
