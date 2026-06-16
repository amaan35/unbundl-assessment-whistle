import data from '../data/data.json'
import whistleDiffImg from '../assets/the-whistle-diff.png'
import nextGenIcon from '../assets/the-whistle-diff-next-gen.png'
import hassleFreeIcon from '../assets/the-whistle-diff-hassle-free.png'
import transparentPricingIcon from '../assets/the-whistle-diff-transparent-pricing.png'

const iconMap = {
  nextGen: nextGenIcon,
  hassleFree: hassleFreeIcon,
  transparentPricing: transparentPricingIcon,
}

function FeatureItem({ feature }) {
  return (
    <div className="flex gap-4 border-b border-gray-100 py-5 last:border-b-0 md:py-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <img
          src={iconMap[feature.icon]}
          alt=""
          className="h-10 w-10 object-contain"
          aria-hidden="true"
        />
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-900 md:text-base">
          {feature.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-gray-600 md:text-sm">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export default function WhistleDifferenceSection() {
  return (
    <section className="bg-[#F0F9FF] px-4 py-10 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
        <div className="rounded-3xl bg-white p-6 md:p-8 lg:flex-1">
          <h2 className="text-center text-xl font-bold text-gray-900 md:text-left md:text-2xl lg:text-3xl">
            The Whistle Difference
          </h2>

          <div className="mt-2 md:mt-4">
            {data.whistleDifference.map((feature) => (
              <FeatureItem key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

        <div className="lg:flex-1">
          <img
            src={whistleDiffImg}
            alt="Whistle aligners manufacturing"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
