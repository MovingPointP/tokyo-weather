const CLOUD_PATH =
  "M 12 44 Q 4 44 4 34 Q 4 24 12 23 Q 12 12 24 12 Q 30 6 38 12 Q 48 8 52 20 Q 60 20 60 30 Q 60 44 50 44 Z";

const SVG_PROPS = {
  viewBox: "0 0 64 64",
  width: 32,
  height: 32,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
};

const Sun = ({ cx, cy, r, rayLen }: { cx: number; cy: number; r: number; rayLen: number }) => (
  <g>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
      const rad = (deg * Math.PI) / 180;
      const inner = r + 3;
      const outer = r + 3 + rayLen;
      return (
        <line
          key={deg}
          x1={cx + inner * Math.sin(rad)}
          y1={cy - inner * Math.cos(rad)}
          x2={cx + outer * Math.sin(rad)}
          y2={cy - outer * Math.cos(rad)}
          stroke="#F59E0B"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      );
    })}
    <circle cx={cx} cy={cy} r={r} fill="#FBBF24" />
  </g>
);

const CloudShape = ({ fill = "#E5E7EB", stroke = "#9CA3AF" }: { fill?: string; stroke?: string }) => (
  <path d={CLOUD_PATH} fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
);

const SmallCloud = () => (
  <g transform="translate(16, 22) scale(0.58)">
    <CloudShape />
  </g>
);

const RainDrops = ({ count }: { count: 3 | 4 }) => {
  const drops =
    count === 3
      ? [[22, 48, 18, 57], [34, 48, 30, 57], [46, 48, 42, 57]]
      : [[16, 48, 12, 57], [28, 48, 24, 57], [40, 48, 36, 57], [52, 48, 48, 57]];
  return (
    <g>
      {drops.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
      ))}
    </g>
  );
};

const Snowflake = ({ cx, cy, r }: { cx: number; cy: number; r: number }) => (
  <g stroke="#93C5FD" strokeWidth="2" strokeLinecap="round">
    {[0, 60, 120].map((deg) => {
      const rad = (deg * Math.PI) / 180;
      return (
        <line
          key={deg}
          x1={cx - r * Math.sin(rad)}
          y1={cy - r * Math.cos(rad)}
          x2={cx + r * Math.sin(rad)}
          y2={cy + r * Math.cos(rad)}
        />
      );
    })}
  </g>
);

const SnowFlakes = () => (
  <g>
    <Snowflake cx={20} cy={52} r={4} />
    <Snowflake cx={32} cy={50} r={4} />
    <Snowflake cx={44} cy={52} r={4} />
  </g>
);

const FogLines = () => (
  <g stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round">
    <line x1="8" y1="46" x2="56" y2="46" />
    <line x1="12" y1="52" x2="52" y2="52" />
    <line x1="8" y1="58" x2="56" y2="58" />
  </g>
);

const Lightning = () => (
  <path
    d="M 34 40 L 25 53 L 31 53 L 27 62 L 39 49 L 33 49 Z"
    fill="#FCD34D"
    stroke="#F59E0B"
    strokeWidth="1"
    strokeLinejoin="round"
  />
);

export const SunnySvg = () => (
  <svg {...SVG_PROPS}>
    <Sun cx={32} cy={32} r={14} rayLen={7} />
  </svg>
);

export const MostlySunnySvg = () => (
  <svg {...SVG_PROPS}>
    <Sun cx={26} cy={24} r={13} rayLen={6} />
    <SmallCloud />
  </svg>
);

export const PartlyCloudySvg = () => (
  <svg {...SVG_PROPS}>
    <Sun cx={44} cy={18} r={11} rayLen={5} />
    <CloudShape />
  </svg>
);

export const CloudySvg = () => (
  <svg {...SVG_PROPS}>
    <CloudShape />
  </svg>
);

export const FogSvg = () => (
  <svg {...SVG_PROPS}>
    <CloudShape fill="#D1D5DB" />
    <FogLines />
  </svg>
);

export const DrizzleSvg = () => (
  <svg {...SVG_PROPS}>
    <Sun cx={46} cy={16} r={10} rayLen={5} />
    <CloudShape />
    <RainDrops count={3} />
  </svg>
);

export const RainSvg = () => (
  <svg {...SVG_PROPS}>
    <CloudShape fill="#D1D5DB" />
    <RainDrops count={4} />
  </svg>
);

export const SnowSvg = () => (
  <svg {...SVG_PROPS}>
    <CloudShape fill="#DBEAFE" stroke="#93C5FD" />
    <SnowFlakes />
  </svg>
);

export const ThunderstormSvg = () => (
  <svg {...SVG_PROPS}>
    <CloudShape fill="#6B7280" stroke="#4B5563" />
    <Lightning />
  </svg>
);

export const UnknownSvg = () => (
  <svg {...SVG_PROPS}>
    <circle cx="32" cy="32" r="28" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
    <path
      d="M 24 22 Q 24 14 32 14 Q 40 14 40 22 Q 40 28 32 30 L 32 36"
      fill="none"
      stroke="#9CA3AF"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="32" cy="42" r="2.5" fill="#9CA3AF" />
  </svg>
);
