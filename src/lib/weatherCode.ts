export function getWeatherType(code: number): string {
  if (code === 0) return "sunny"; // 晴れ
  if (code === 1) return "mostlySunny"; // 晴れ時々曇り
  if (code === 2) return "partlyCloudy"; // 曇り時々晴れ
  if (code === 3) return "cloudy"; // 曇り
  if (code === 45 || code === 48) return "fog"; // 霧
  if (code >= 51 && code <= 55) return "drizzle"; // 霧雨
  if (code === 56 || code === 57) return "snow"; // 雪
  if (code >= 61 && code <= 65) return "rain"; // 雨
  if (code === 66 || code === 67) return "snow"; // 雪
  if (code >= 71 && code <= 77) return "snow"; // 雪
  if (code >= 80 && code <= 82) return "rain"; // 雨
  if (code === 85 || code === 86) return "snow"; // 雪
  if (code >= 95) return "thunderstorm"; // 雷雨
  return "unknown";
}
