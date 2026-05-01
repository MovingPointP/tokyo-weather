import WeatherTableCore from "@/components/WeatherTableCore";

type HourlyItem = {
  hour: number;
  temp: number;
  precip: number;
  weather: number;
};

type Props = {
  hourly: HourlyItem[];
};

const OGP_DISPLAY_TIMES = [6, 9, 12, 15, 18, 21];

// WeatherTableCoreのラッパー、OGP用
export default function WeatherTableOgp({ hourly }: Props) {
  return (
    <div className="rounded-xl border border-gray-300">
      <WeatherTableCore
        hourly={hourly}
        displayTimes={OGP_DISPLAY_TIMES}
        className="w-full table-fixed"
      />
    </div>
  );
}
