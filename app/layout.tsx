import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: 'swap',
  preload: true,
});

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500"],
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ap-mayfest-2025.vercel.app';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | 東京大学五月祭2025 工学博覧会',
    default: '工学博覧会2025 | 東京大学五月祭',
  },
  description: "東京大学工学部計数工学科と物理工学科の学生が合同で主催する五月祭の展示です。最先端の技術を駆使した作品から身近なモノを応用した作品まで、学生たちの熱意が詰まった展示をご覧いただけます。2025年5月24日（土）・25日（日）開催。",
  keywords: "東京大学, 五月祭, 工学博覧会, 計数工学科, 物理工学科, 学園祭, 展示, 2025",
  authors: [{ name: "東京大学工学部計数工学科・物理工学科有志" }],
  creator: "東京大学工学部計数工学科・物理工学科有志",
  publisher: "東京大学工学部計数工学科・物理工学科有志",
  manifest: '/site.webmanifest',
  openGraph: {
    title: "工学博覧会2025",
    description: "工学博覧会は東京大学工学部6号館で開催されます。五月祭でお待ちしています。",
    url: siteUrl,
    siteName: "工学博覧会2025",
    type: "website",
    images: [
      {
        url: `${siteUrl}/thumbnail.webp`,
        width: 2400,
        height: 1260,
        alt: "工学博覧会2025",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@apmayfes",
    title: "工学博覧会2025",
    description: "工学博覧会は東京大学工学部6号館で開催されます。五月祭でお待ちしています。",
    images: {
      url: `${siteUrl}/thumbnail.webp`,
      alt: "工学博覧会2025"
    }
  },
  icons: {
    icon: '/favicon.ico',
  },
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
