import data from '../data/data.json'
import stepsImage from '../assets/perfect-smile-in-4-simple-steps.png'

function PlayButton() {
  return (
    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="ml-1 h-6 w-6 text-[#9361D7]"
        aria-hidden="true"
      >
        <path d="M8 5.14v14.72a1 1 0 001.5.86l11.04-7.36a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" />
      </svg>
    </span>
  )
}

function StepItem({ step, isLast, layout }) {
  if (layout === 'vertical') {
    return (
      <div className="relative flex gap-4 pb-8 last:pb-0">
        {!isLast && (
          <span
            className="absolute left-[19px] top-10 h-[calc(100%-2rem)] border-l-2 border-dashed border-[#BAE6FD]"
            aria-hidden="true"
          />
        )}
        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#93C5FD] bg-[#EFF6FF] text-sm font-bold text-gray-900">
          {step.number}
        </div>
        <div className="pt-1">
          <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">
            {step.description}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#93C5FD] bg-[#EFF6FF] text-sm font-bold text-gray-900">
        {step.number}
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-900 md:text-base">
          {step.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-gray-600 md:text-sm">
          {step.description}
        </p>
      </div>
    </div>
  )
}

export default function FourStepsSection() {
  return (
    <section className="bg-[#F0F9FF] px-4 py-10 md:px-10 md:py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-sm md:p-10 lg:p-12">
        <h2 className="text-center text-xl font-bold leading-tight text-gray-900 lg:hidden">
          Get your perfect smile in four simple steps
        </h2>

        <div className="relative mt-6 overflow-hidden rounded-2xl border-x-4 border-[#9361D7] lg:hidden">
          <img
            src={stepsImage}
            alt="Dental scan procedure"
            className="aspect-video w-full object-cover"
          />
          <PlayButton />
        </div>

        <div className="mt-8 flex flex-col gap-8 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1">
            <h2 className="hidden text-2xl font-bold leading-tight text-gray-900 lg:block lg:text-3xl">
              Get your perfect smile in four simple steps
            </h2>

            <div className="mt-0 lg:mt-8">
              <div className="md:hidden">
                {data.smileSteps.map((step, index) => (
                  <StepItem
                    key={step.id}
                    step={step}
                    isLast={index === data.smileSteps.length - 1}
                    layout="vertical"
                  />
                ))}
              </div>

              <div className="hidden grid-cols-2 gap-x-8 gap-y-8 md:grid lg:mt-0">
                {data.smileSteps.map((step) => (
                  <StepItem key={step.id} step={step} layout="grid" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden shrink-0 overflow-hidden rounded-2xl border-2 border-[#9361D7] lg:block lg:w-[42%]">
            <img
              src={stepsImage}
              alt="Dental scan procedure"
              className="aspect-[4/3] w-full object-cover"
            />
            <PlayButton />
          </div>
        </div>
      </div>
    </section>
  )
}
