import React from 'react';
import { MdLocationOn, MdTrain } from 'react-icons/md';

interface AccessCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const AccessCard: React.FC<AccessCardProps> = ({ title, icon, children }) => {
  return (
    <div
      className="bg-black/50 backdrop-blur-sm rounded-lg p-6 space-y-4 hover:bg-black/60 transition-colors animate-fade-in-up"
    >
      <h3 className="text-xl font-bold font-serif text-blue-200 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  )
}

export default function Access() {
  const stations = [
    { name: "本郷三丁目駅", line: "地下鉄丸の内線", time: "徒歩8分" },
    { name: "湯島駅または根津駅", line: "地下鉄千代田線", time: "徒歩10分" },
    { name: "東大前駅", line: "地下鉄南北線", time: "徒歩5分" },
    { name: "春日駅", line: "地下鉄三田線", time: "徒歩15分" },
  ]

  return (
    <section id="access" className="py-16 bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-10 text-center text-white">アクセス</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <AccessCard 
              title="開催場所"
              icon={<MdLocationOn className="text-2xl" />}
            >
              <p className="text-white">工学部６号館３階セミナー室A・B・C・D</p>
              <p className="text-white">
                正門から入って左に曲がった後、スターバックス前で右に曲がってください。
                大きな銀杏のある広場の奥に建物があります。
              </p>
            </AccessCard>

            <AccessCard 
              title="公共交通機関"
              icon={<MdTrain className="text-2xl" />}
            >
              <div className="space-y-3">
                {stations.map((station, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-2" />
                    <p className="text-white">
                      {station.name}（{station.line}）より{station.time}
                    </p>
                  </div>
                ))}
              </div>
            </AccessCard>
          </div>

          <div className="h-full min-h-[400px] rounded-lg overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4909203284556!2d139.75852007666546!3d35.71414327257669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c31b6a0c8eb%3A0xb76f6e1eaadfecf6!2z44CSMTEzLTAwMzMg5p2x5Lqs6YO95paH5Lqs5Yy65pys6YO377yX5LiB55uu77yTIOW3pTblj7fppKg!5e0!3m2!1sja!2sjp!4v1740764212343!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 