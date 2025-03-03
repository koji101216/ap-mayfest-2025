import type { Metadata } from "next";
import Hero from "@/components/Hero"
import Navigation from "@/components/client/Navigation"
import About from "@/components/About"
import ExhibitionList from "@/components/ExhibitionList"
import Magazine from "@/components/Magazine"
import MayFest from "@/components/MayFest"
import Access from "@/components/Access"
import Links from "@/components/Links"
import Footer from "@/components/Footer"
import Script from "next/script"

export const metadata: Metadata = {
  title: '工学博覧会2025 | 東京大学五月祭',
}

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "工学博覧会2025",
  "description": "東京大学工学部計数工学科と物理工学科の学生が合同で主催する五月祭の展示です。",
  "startDate": "2025-05-24",
  "endDate": "2025-05-25",
  "location": {
    "@type": "Place",
    "name": "東京大学本郷キャンパス 工学部6号館",
    "address": "東京都文京区本郷7-3-1"
  },
  "organizer": {
    "@type": "Organization",
    "name": "東京大学工学部計数工学科・物理工学科有志"
  }
};

export default function Home() {
  return (
    <>
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <ExhibitionList />
        <Magazine />
        <MayFest />
        <Access />
        <Links />
        <Footer />
      </main>
    </>
  );
}
