import { HeroAnimation } from "@/components/client/HeroAnimation"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-radial from-indigo-900 via-black to-blue-950">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black/50 to-blue-900/50 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_80%)]"></div>
      <HeroAnimation />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-serif mb-4 text-white leading-tight tracking-tight">
          工学博覧会
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 mx-auto mt-8 mb-8 rounded-full animate-pulse" />
      </div>
    </section>
  )
} 