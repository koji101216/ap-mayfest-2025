import Image from "next/image"

interface Exhibition {
  title: string
  description: string
  image: string
}

export const exhibitions = [
  {
    title: "Blokusで対戦",
    description: "誰でも楽しめるボードゲーム『Blokus』で、コンピュータアルゴリズムと対戦してみませんか？カメラでリアルタイムに盤面を読み取り、ヒューリスティックアルゴリズムを用いて手を打つAIと勝負！難易度も選べるので、初心者から上級者まで楽しめます。",
    image: "/placeholder.svg",
  },
  {
    title: "光学ボードゲーム",
    description: "レーザー光を使ったボードゲーム型パズルに挑戦しませんか？ミラーや偏光板、偏光ビームスプリッターなどの光学素子を駒として盤上に配置し、レーザー光を目標の的に当てる知恵の輪です。光の性質（反射の法則、偏光など）を楽しく学べる体験型展示です。",
    image: "/placeholder.svg",
  },
  {
    title: "自家製レーザー",
    description: "学生が自作したレーザーを展示します。レーザーの仕組みや原理についてわかりやすく解説します。ものづくりの楽しさとレーザー技術への理解を深めることができる展示です。",
    image: "/placeholder.svg",
  },
  {
    title: "音と波の不思議",
    description: "矩形波やノコギリ波、三角波などの様々な音を作成し、フィルタやエフェクタをかけて音の変化を楽しみましょう。オシロスコープで波形の変化を見ながら、音の処理過程を理解できます。自分の声を変換するボイスチェンジャーも体験できます！",
    image: "/placeholder.svg",
  },
  {
    title: "ダイアルアップ通信と暗号解読",
    description: "音響と通信の技術がどのように繋がっているか、ダイアルアップ通信による暗号解読展示で体験できます。身近な通信技術の仕組みを楽しく学べます。",
    image: "/placeholder.svg",
  },
  {
    title: "超伝導リニア",
    description: "ネオジム磁石を敷き詰めた円形の線路上に、液体ヘリウムで冷却した超伝導体を走らせます。超伝導体が空中に浮いて疾走する姿は必見です！",
    image: "/placeholder.svg",
  },
  {
    title: "磁性流体",
    description: "磁性を帯びた不思議な流体を観察できます。ネオジム磁石を近づけると、流体がスパイク状に盛り上がる様子はまるでアート！視覚的にも楽しめる展示です。",
    image: "/placeholder.svg",
  },
  {
    title: "圧電電話",
    description: "圧力と電気を互いに変換できる圧電効果を利用した電話機を体験できます。声による振動が電流に変わり、離れた場所で再び音に変換される仕組みを理解できます。",
    image: "/placeholder.svg",
  },
  {
    title: "シャーペンの芯と反磁性",
    description: "シャーペンの芯が持つ反磁性を利用して、ネオジム磁石の上にシャーペンを浮かせる展示です。バランスの調整が難しく、ゲーム性もあります。反磁性や浮く原理についてのポスター展示も行います。",
    image: "/placeholder.svg",
  },
  {
    title: "エアホッケーAIロボット",
    description: "強化学習で作られたAIロボットとエアホッケーで対決！チェスや将棋、囲碁でチャンピオンを倒した技術と同じ「強化学習」がどのように動くのか、実際に体験できます。",
    image: "/placeholder.svg",
  },
  {
    title: "量子ゼノ効果の実験",
    description: "砂糖水で満たしたアクリルケースの中に偏光板を複数置き、レーザーを当てることで量子ゼノ効果を説明します。家庭でも簡単に再現できるセットアップで、量子の不思議な世界を体験できます。",
    image: "/placeholder.svg",
  },
  {
    title: "ICカードオルゴール",
    description: "ICカードの書き換えを行い、カードリーダーで読み込むと接続されたオルゴールの曲が変わります。半導体技術の身近な応用例を楽しく体験できます。",
    image: "/placeholder.svg",
  },
]

function ExhibitionCard({ exhibition, index }: { exhibition: Exhibition; index: number }) {
  return (
    <div 
      className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={exhibition.image || "/placeholder.svg"}
          alt={exhibition.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold font-serif mb-2 text-white">{exhibition.title}</h3>
        <p className="text-purple-200">{exhibition.description}</p>
      </div>
    </div>
  )
}

export default function ExhibitionList() {
  return (
    <section
      id="exhibition-list"
      className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-16 text-center text-white">展示一覧</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <ExhibitionCard key={index} exhibition={exhibition} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 