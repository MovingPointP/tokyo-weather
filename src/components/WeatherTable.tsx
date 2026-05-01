"use client";

import { useEffect, useRef } from "react";
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

// WeatherTableCoreのラッパー、スクロール機能を提供する
export default function WeatherTable({ hourly }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollToInitialHour(scrollRef.current);
  }, []);

  return (
    <div ref={scrollRef} className="overflow-x-auto rounded-xl border border-gray-200">
      <WeatherTableCore hourly={hourly} />
    </div>
  );
}
