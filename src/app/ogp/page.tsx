import Title from "@/components/Title";
import WeatherTableCore from "@/components/WeatherTableCore";
import ClothingSuggestion from "@/components/ClothingSuggestion";
import { loadWeatherData } from "@/lib/weather";

const OGP_DISPLAY_TIMES = [6, 9, 12, 15, 18, 21];

export default function Home() {
  const { updatedAt, hourly } = loadWeatherData();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-2 py-8 flex flex-col gap-4">
        <Title updatedAt={updatedAt} />
        <ClothingSuggestion hourly={hourly} />
        <div className="rounded-xl border border-gray-200">
          <WeatherTableCore
            hourly={hourly}
            displayTimes={OGP_DISPLAY_TIMES}
            className="w-full table-fixed"
          />
        </div>
      </div>
    </main>
  );
}
