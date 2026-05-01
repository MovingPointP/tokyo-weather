import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.SITE_URL ?? "http://localhost:3000/tokyo-weather",
  ),
  title: "東京の天気 | Tokyo Weather",
  description: " ",
  openGraph: {
    title: "東京の天気 | Tokyo Weather",
    description: " ",
    images: [{ url: "/ogp.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-(family-name:--font-noto-sans-jp)">
        {children}
      </body>
    </html>
  );
}
