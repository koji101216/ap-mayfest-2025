import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500"],
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "工学博覧会2025 | 時を紡ぐ技術",
  description: "未来を創る工学の世界へようこそ。インタラクティブな展示で工学の魅力を体験しよう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${shipporiMincho.variable}`}>
      <body className="bg-black text-white antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
