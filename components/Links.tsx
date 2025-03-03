import Link from "next/link"
import ClientParticleBackground from "@/components/client/ClientParticleBackground"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const universityLinks = [
  { name: "東京大学公式HP", url: "https://www.u-tokyo.ac.jp/" },
  { name: "東京大学工学部公式HP", url: "https://www.t.u-tokyo.ac.jp/foe" },
  { name: "物理工学科公式HP", url: "https://www.ap.t.u-tokyo.ac.jp/" },
  { name: "計数工学科公式HP", url: "https://www.keisu.t.u-tokyo.ac.jp/" },
]

const mayfestLinks = [{ name: "五月祭公式HP", url: "https://gogatsusai.jp/" }]

const socialLinks = [
  { name: "工学博覧会", icon: FaXTwitter, url: "https://x.com/apmayfes" },
  { name: "工学博覧会", icon: FaInstagram, url: "https://www.instagram.com/apmayfest/" },
  { name: "五月祭", icon: FaXTwitter, url: "https://x.com/gogatsusai" },
  { name: "五月祭", icon: FaInstagram, url: "https://www.instagram.com/gogatsusai/" },
]

const collaborators = [
  { name: "稲見・門内研究室", url: "https://star.rcast.u-tokyo.ac.jp/" },
  { name: "加速キッチン", url: "https://accel-kitchen.com/" },
  { name: "木村研究室", url: "https://crystal.k.u-tokyo.ac.jp/hp/" },
  { name: "素粒子物理国際研究センター", url: "https://quantum-icepp.jp/" },
  { name: "為ヶ井研究室", url: "http://moo.t.u-tokyo.ac.jp/index_tamegai.html" },
  { name: "中村研究室", url: "https://www.qipe.t.u-tokyo.ac.jp/" },
  { name: "Faraday Factory Japan 合同会社", url: "https://www.faradaygroup.com/" },
  { name: "古澤・遠藤研究室", url: "http://www.alice.t.u-tokyo.ac.jp/index.php" },
]

export default function Links() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden">
      <ClientParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center text-white">関連リンク</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold font-serif mb-4 text-purple-300">【大学・学部・学科】</h3>
                <ul className="space-y-2">
                  {universityLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.url}
                        className="text-white hover:text-purple-300 transition-colors underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif mb-4 text-purple-300">【五月祭関連】</h3>
                <ul className="space-y-2">
                  {mayfestLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.url}
                        className="text-white hover:text-purple-300 transition-colors underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif mb-4 text-purple-300">【各種SNS】</h3>
                <ul className="space-y-2">
                  {socialLinks.map((link) => (
                    <li key={`${link.name}-${link.url}`} className="flex items-center gap-2">
                      <link.icon className="w-5 h-5 text-white" />
                      <Link
                        href={link.url}
                        className="text-white hover:text-purple-300 transition-colors underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold font-serif mb-4 text-purple-300">【ご協力者様（敬称略・五十音順）】</h3>
              <ul className="space-y-2">
                {collaborators.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="text-white hover:text-purple-300 transition-colors underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 