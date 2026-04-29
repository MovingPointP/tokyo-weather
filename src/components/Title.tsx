type Props = {
  updatedAt: string;
};

export default function Title({ updatedAt }: Props) {
  return (
    <div className="flex items-baseline justify-between mt-4">
      <h1 className="text-3xl font-bold text-gray-800">本日の東京の天気</h1>
      <span className="text-base text-gray-400">最終更新: {updatedAt}</span>
    </div>
  );
}
