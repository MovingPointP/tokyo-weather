import Weather from "@/components/Weather";

type HourlyItem = {
  hour: number;
  temp: number;
  precip: number;
  weather: number;
};

type Props = {
  hourly: HourlyItem[];
  displayTimes?: number[];
  className?: string;
};

const DEFAULT_DISPLAY_TIMES = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

export default function WeatherTableCore({
  hourly,
  displayTimes = DEFAULT_DISPLAY_TIMES,
  className,
}: Props) {
  const filtered = hourly.filter((item) => displayTimes.includes(item.hour));

  return (
    <table className={`text-xl text-center border-collapse ${className ?? ""}`}>
      <tbody>
        <tr className="border-b border-gray-300">
          <th className="sticky left-0 bg-white px-4 py-3 text-gray-500 font-medium whitespace-nowrap border-r border-gray-300">
            時間
          </th>
          {filtered.map((item) => (
            <td
              key={item.hour}
              data-hour={item.hour}
              className="px-3 py-3 text-gray-600 whitespace-nowrap min-w-12"
            >
              {item.hour}時
            </td>
          ))}
        </tr>
        <tr className="border-b border-gray-300">
          <th className="sticky left-0 bg-white px-4 py-3 text-gray-500 font-medium whitespace-nowrap border-r border-gray-300">
            天気
          </th>
          {filtered.map((item) => (
            <td key={item.hour} className="px-3 py-3 text-2xl">
              <div className="flex justify-center">
                <Weather code={item.weather} />
              </div>
            </td>
          ))}
        </tr>
        <tr className="border-b border-gray-300">
          <th className="sticky left-0 bg-white px-4 py-3 text-gray-500 font-medium whitespace-nowrap border-r border-gray-300">
            気温
          </th>
          {filtered.map((item) => (
            <td
              key={item.hour}
              className="px-3 py-3 text-gray-700 whitespace-nowrap"
            >
              {item.temp}°C
            </td>
          ))}
        </tr>
        <tr>
          <th className="sticky left-0 bg-white px-4 py-3 text-gray-500 font-medium whitespace-nowrap border-r border-gray-300">
            降水
          </th>
          {filtered.map((item) => (
            <td
              key={item.hour}
              className="px-3 py-3 text-sky-500 whitespace-nowrap"
            >
              {item.precip}mm
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
