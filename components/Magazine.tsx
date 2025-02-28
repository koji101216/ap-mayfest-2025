import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Magazine() {
  return (
    <section id="magazine" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/magazine-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-900/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-sm md:text-base text-purple-300 mb-2 text-center">Pathways Into Applied Physics</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-serif mb-8 text-center text-white">応用物理の散歩道</h3>
          <h4 className="text-xl md:text-2xl font-serif mb-12 text-center text-purple-200">
            工学をもっと深く知りたいあなたに
          </h4>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 mb-12">
            <div className="text-left space-y-6 text-gray-300">
              <p>
                「応用物理の散歩道」は物理工学科・計数工学科の学生が、自分たちの専門について愛情たっぷりお届けするマガジンです。
              </p>
              <p>
                工学博覧会の展示物の背景にある理論の解説や学生目線での物工・計数の学科生活の紹介、さらに個人の学問的関心についての記事を収録しています。
              </p>
              <p>
                展示会場で書籍版（ご好評につき完売しました）およびPDF版を販売しております。また、会場にお越しになれない方向けにPDF版のオンライン販売（booth）もご用意しています。ぜひお手に取ってご覧ください。
              </p>
            </div>
          </div>

          <div className="bg-purple-900/20 rounded-lg p-6 text-center mb-8">
            <p className="text-lg text-white">B5版・234ページ 500円（書籍版・PDF版共通）</p>
          </div>

          <div className="text-center">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="#">詳細はこちら</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}