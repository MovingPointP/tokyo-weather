import Title from "@/components/Title";
import WeatherTable from "@/components/WeatherTable";
import ClothingSuggestion from "@/components/ClothingSuggestion";
import { loadWeatherData } from "@/lib/weather";

export default function Home() {
  const { updatedAt, hourly } = loadWeatherData();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-2 py-20 flex flex-col gap-4">
        <Title updatedAt={updatedAt} />
        <ClothingSuggestion hourly={hourly} />
        <WeatherTable hourly={hourly} />
      </div>
    </main>
  );
}
