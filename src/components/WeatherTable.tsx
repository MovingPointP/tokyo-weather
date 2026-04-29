import WeatherIcon from "@/components/WeatherIcon";

type HourlyItem = {
  hour: number;
  temp: number;
  precip: number;
  weather: number;
};

type Props = {
  hourly: HourlyItem[];
};

export default function WeatherTable({ hourly }: Props) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <tbody>
          <tr>
            <th>時間</th>
            {hourly.map((item) => (
              <td key={item.hour}>{item.hour}時</td>
            ))}
          </tr>
          <tr>
            <th>天気</th>
            {hourly.map((item) => (
              <td key={item.hour}>
                <WeatherIcon code={item.weather} />
              </td>
            ))}
          </tr>
          <tr>
            <th>気温</th>
            {hourly.map((item) => (
              <td key={item.hour}>{item.temp}°C</td>
            ))}
          </tr>
          <tr>
            <th>降水確率</th>
            {hourly.map((item) => (
              <td key={item.hour}>{item.precip}%</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
