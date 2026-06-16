import data from '../data/data.json'

function MarqueeContent() {
  return (
    <>
      {data.marqueeItems.map((item, index) => (
        <span key={index} className="mx-8 inline-flex shrink-0 items-center gap-1">
          {item.text}
          {item.highlight && (
            <span className="font-bold">{item.highlight}</span>
          )}
          <span className="mx-4 text-gray-400">•</span>
        </span>
      ))}
    </>
  )
}

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#DCFCE7] to-[#E0F2FE] py-3">
      <div className="marquee-track flex whitespace-nowrap text-sm text-gray-800 md:text-base">
        <div className="marquee-content flex">
          <MarqueeContent />
        </div>
        <div className="marquee-content flex" aria-hidden="true">
          <MarqueeContent />
        </div>
      </div>
    </div>
  )
}
