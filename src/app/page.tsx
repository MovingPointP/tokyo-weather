import { readFileSync } from "fs";
import { join } from "path";

import Title from "@/components/Title";
import WeatherTable from "@/components/WeatherTable";
import ClothingSuggestion from "@/components/ClothingSuggestion";

export default function Home() {
  // JSON読み込み
  const raw = readFileSync(
    join(process.cwd(), "src/data/weather.json"),
    "utf-8",
  );

  const { updatedAt, hourly } = JSON.parse(raw);

  return (
    <>
      <Title updatedAt={updatedAt}></Title>
      <ClothingSuggestion hourly={hourly}></ClothingSuggestion>
      <WeatherTable hourly={hourly}></WeatherTable>
    </>
  );
}
