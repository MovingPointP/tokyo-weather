import { getClothing } from "@/lib/clothing";

type HourlyItem = {
  hour: number;
  temp: number;
  precip: number;
  weather: number;
};

type Props = {
  hourly: HourlyItem[];
};

export default function ClothingSuggestion({ hourly }: Props) {
  // 指定した時間帯の気温だけを抜き出す関数
  const tempsInRange = (from: number, to: number) =>
    hourly
      .filter((item) => item.hour >= from && item.hour <= to)
      .map((item) => item.temp);

  // 朝晩の温度
  const morningEveningTemps = [...tempsInRange(7, 9), ...tempsInRange(18, 21)];
  const morningEveningTemp = Math.min(...morningEveningTemps);

  // 日中の温度
  const daytimeTemp = Math.max(...tempsInRange(10, 17));

  return (
    <div className="bg-gray-50 rounded-xl px-4 py-4 flex items-center gap-2 text-gray-700 text-xl">
      <span>
        朝晩: <strong>{getClothing(morningEveningTemp)}</strong>{" "}
        <span className="text-gray-500 text-lg">
          ({morningEveningTemp}°C)
        </span>
      </span>
      <span className="text-gray-300">|</span>
      <span>
        日中: <strong>{getClothing(daytimeTemp)}</strong>{" "}
        <span className="text-gray-500 text-lg">({daytimeTemp}°C)</span>
      </span>
    </div>
  );
}
