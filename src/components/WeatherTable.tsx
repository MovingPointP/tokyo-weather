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

export default function WeatherTable({ hourly }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  //  初期表示で「6時」の列が左端に来るよう自動スクロール
  useEffect(() => {
    if (!scrollRef.current) return;

    // 「6時」の列の要素取得
    const cell =
      scrollRef.current.querySelector<HTMLElement>("td[data-hour='6']");
    if (!cell) return;

    // 見出し列の要素取得
    const th = scrollRef.current.querySelector<HTMLElement>("th");

    const thWidth = th ? th.offsetWidth : 0;
    const containerRect = scrollRef.current.getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();

    // スクロールの初期位置を変更
    scrollRef.current.scrollLeft +=
      cellRect.left - containerRect.left - thWidth;
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
