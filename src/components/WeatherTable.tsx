"use client";

import { useEffect, useRef } from "react";
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

// 初期スクロール位置
const INITIAL_HOUR = 6;

// 初期表示で、左端を特定の列になるように自動スクロール
function scrollToInitialHour(container: HTMLDivElement) {
  const cell = container.querySelector<HTMLElement>(
    `td[data-hour='${INITIAL_HOUR}']`,
  );
  if (!cell) return;

  const th = container.querySelector<HTMLElement>("th");
  if (!th) return;

  const containerRect = container.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();

  container.scrollLeft += cellRect.left - containerRect.left - th.offsetWidth;
}

export default function WeatherTable({ hourly }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    // 自動スクロール
    scrollToInitialHour(scrollRef.current);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto rounded-xl border border-gray-200"
    >
      <table className="text-base text-center border-collapse">
        <tbody>
          <tr className="border-b border-gray-200">
            <th className="sticky left-0 bg-white px-4 py-3 text-left text-gray-500 font-medium whitespace-nowrap border-r border-gray-200">
              時間
            </th>
            {hourly.map((item) => (
              <td
                key={item.hour}
                data-hour={item.hour}
                className="px-3 py-3 text-gray-600 whitespace-nowrap min-w-12"
              >
                {item.hour}時
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200">
            <th className="sticky left-0 bg-white px-4 py-3 text-left text-gray-500 font-medium whitespace-nowrap border-r border-gray-200">
              天気
            </th>
            {hourly.map((item) => (
              <td key={item.hour} className="px-3 py-3 text-xl">
                <WeatherIcon code={item.weather} />
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200">
            <th className="sticky left-0 bg-white px-4 py-3 text-left text-gray-500 font-medium whitespace-nowrap border-r border-gray-200">
              気温
            </th>
            {hourly.map((item) => (
              <td
                key={item.hour}
                className="px-3 py-3 text-gray-700 whitespace-nowrap"
              >
                {item.temp}°C
              </td>
            ))}
          </tr>
          <tr>
            <th className="sticky left-0 bg-white px-4 py-3 text-left text-gray-500 font-medium whitespace-nowrap border-r border-gray-200">
              降水量
            </th>
            {hourly.map((item) => (
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
    </div>
  );
}
