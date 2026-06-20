type Props = {
  updatedAt: string;
};

export default function Title({ updatedAt }: Props) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between mt-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 whitespace-nowrap">本日の東京の天気</h1>
      <span className="text-base sm:text-lg md:text-xl text-gray-600 font-bold">最終更新: {updatedAt}</span>
    </div>
  );
}
