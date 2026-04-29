export function getClothing(temp: number): string {
  if (temp >= 25) return "半袖シャツ";
  if (temp >= 20) return "長袖シャツ";
  if (temp >= 16) return "カーディガン";
  if (temp >= 12) return "セーター・ニット";
  if (temp >= 8) return "トレンチコート";
  if (temp >= 5) return "冬物コート";
  return "ダウンコート";
}
