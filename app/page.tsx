import Hero from "@/components/Hero"
import Navigation from "@/components/client/Navigation"
import About from "@/components/About"
import ExhibitionList from "@/components/ExhibitionList"
import Magazine from "@/components/Magazine"
import MayFest from "@/components/MayFest"
import Access from "@/components/Access"
import Links from "@/components/Links"
import Footer from "@/components/Footer"

export default function Home() {
  return (
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
  )
}
