export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {/* Circular gradient */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-12 text-white">
            <span className="whitespace-nowrap">ようこそ。</span>
            <span className="whitespace-nowrap">工学博覧会へ。</span>
          </h2>

          <div className="text-left space-y-8 text-purple-100">
            <p className="text-lg md:text-xl leading-relaxed">
              工学博覧会は、東京大学工学部計数工学科と物理工学科の学生が合同で主催する五月祭の展示です。
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              最先端の技術を駆使した作品から身近なモノを応用した作品まで、学生たちの熱意が詰まった展示をご覧いただけます。入場は無料ですので、ぜひ足をお運びください。
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              五月祭は2025年5月24日（土）・25日（日）に開催されます。
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(139, 92, 246, 0.1)"
            fillOpacity="1"
            d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 