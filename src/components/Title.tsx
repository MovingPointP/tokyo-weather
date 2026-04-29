type Props = {
  updatedAt: string;
};

export default function Title({ updatedAt }: Props) {
  return (
    <div>
      <span>本日の東京の天気</span>
      <span>{updatedAt}</span>
    </div>
  );
}
