import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MayFest() {
  return (
    <section id="may-fest" className="py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(93,63,211,0.1),transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-white">五月祭総選挙</h2>
          <p className="mb-8 text-white">五月祭総選挙でのご投票をお願いします！</p>

          <div>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link 
                href="https://gogatsusai.jp/97/visitor/project/330" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                投票する
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 