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
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-2 py-8 flex flex-col gap-4">
        <Title updatedAt={updatedAt} />
        <ClothingSuggestion hourly={hourly} />
        <WeatherTable hourly={hourly} />
      </div>
    </main>
  );
}
