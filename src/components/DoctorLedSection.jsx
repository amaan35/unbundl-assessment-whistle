import doctorLedImg from '../assets/doctor-led.png'

export default function DoctorLedSection() {
  return (
    <section className="bg-[#F0F9FF] px-4 pb-10 md:px-10 md:pb-16">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden md:flex-row md:items-stretch">
        <div className="order-2 flex flex-col justify-center px-0 py-8 md:order-1 md:flex-1 md:py-12 md:pr-10">
          <h2 className="text-xl font-bold leading-tight text-gray-900 md:text-2xl lg:text-3xl">
            We are Doctor-led, not direct-to-customers
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
            We don&apos;t offer direct-to-customer invisible aligners. We treat
            you in a Dental clinic with an Orthodontist. Aligners are just the
            beginning; we ensure comprehensive treatment in over 450+ clinics
            nationwide.
          </p>
          <button
            type="button"
            className="mt-6 w-full rounded-lg bg-[#9361D7] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:w-auto md:min-w-[180px]"
          >
            Get a Callback
          </button>
        </div>

        <div className="order-1 md:order-2 md:flex-1">
          <img
            src={doctorLedImg}
            alt="Doctor at Clove Dental clinic"
            className="h-56 w-full object-cover object-top md:h-full md:min-h-[320px]"
          />
        </div>
      </div>
    </section>
  )
}
