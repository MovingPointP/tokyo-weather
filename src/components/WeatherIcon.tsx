import { codeToEmoji } from "@/lib/weatherCode";

type Props = {
  code: number;
};

export default function WeatherIcon({ code }: Props) {
  return <span>{codeToEmoji(code)}</span>;
}
