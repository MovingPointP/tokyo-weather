import { getWeatherType } from "@/lib/weatherCode";
import {
  SunnySvg,
  MostlySunnySvg,
  PartlyCloudySvg,
  CloudySvg,
  FogSvg,
  DrizzleSvg,
  RainSvg,
  SnowSvg,
  ThunderstormSvg,
  UnknownSvg,
} from "@/components/icons/weatherSvg";

type Props = {
  code: number;
};

const SVG_MAP: Record<string, () => React.ReactElement> = {
  sunny: SunnySvg,
  mostlySunny: MostlySunnySvg,
  partlyCloudy: PartlyCloudySvg,
  cloudy: CloudySvg,
  fog: FogSvg,
  drizzle: DrizzleSvg,
  rain: RainSvg,
  snow: SnowSvg,
  thunderstorm: ThunderstormSvg,
};

export default function Weather({ code }: Props) {
  const Icon = SVG_MAP[getWeatherType(code)] ?? UnknownSvg;
  return <Icon />;
}
