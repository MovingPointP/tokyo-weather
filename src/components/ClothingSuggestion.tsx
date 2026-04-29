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
    <div>
      <span>朝晩: {getClothing(morningEveningTemp)}</span>
      <span>日中: {getClothing(daytimeTemp)}</span>
    </div>
  );
}
