import data from '../data/data.json'
import whistleDiffImg from '../assets/the-whistle-diff.png'

function NextGenIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-10 w-10 text-gray-700"
      aria-hidden="true"
    >
      <rect x="8" y="28" width="32" height="12" rx="2" />
      <path d="M16 28V18h16v10" />
      <path d="M20 18V12h8v6" />
      <circle cx="24" cy="8" r="3" />
      <path d="M14 34h20" />
    </svg>
  )
}

function HassleFreeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-10 w-10 text-gray-700"
      aria-hidden="true"
    >
      <path d="M8 36L18 24l8 8 14-16" />
      <circle cx="34" cy="14" r="6" />
      <path d="M31 14h6M34 11v6" />
    </svg>
  )
}

function TransparentPricingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-10 w-10 text-gray-700"
      aria-hidden="true"
    >
      <path d="M12 28c0-6 5-10 12-10s12 4 12 10" />
      <ellipse cx="24" cy="28" rx="16" ry="6" />
      <circle cx="24" cy="20" r="8" />
      <path d="M21 20h6M24 17v6" />
    </svg>
  )
}

const iconMap = {
  nextGen: NextGenIcon,
  hassleFree: HassleFreeIcon,
  transparentPricing: TransparentPricingIcon,
}

function FeatureItem({ feature }) {
  const Icon = iconMap[feature.icon]

  return (
    <div className="flex gap-4 border-b border-gray-100 py-5 last:border-b-0 md:py-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-50">
        <Icon />
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
