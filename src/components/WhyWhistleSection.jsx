import data from '../data/data.json'

function WhyCard({ card }) {
  const imageUrl = `https://picsum.photos/seed/${card.id}/400/400`

  return (
    <article className="w-[240px] shrink-0 overflow-hidden rounded-2xl bg-[#F0F9FF] md:w-auto md:flex-1">
      <img
        src={imageUrl}
        alt={card.title}
        className="aspect-square max-md:aspect-[4/3] w-full rounded-t-2xl object-cover"
      />
      <div className="px-4 py-4 md:px-5 md:py-5">
        <h3 className="text-sm font-bold text-gray-900 md:text-lg">
          {card.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed md:text-sm">
          {card.description}
        </p>
      </div>
    </article>
  )
}

export default function WhyWhistleSection() {
  return (
    <section className="bg-white py-10 md:px-10 md:py-16">
      <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
        Why Whistle?
      </h2>

      <div className="scrollbar-hide mt-8 px-4 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
        {data.whyWhistle.map((card) => (
          <WhyCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}
