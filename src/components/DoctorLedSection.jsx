import doctorLedImg from '../assets/doctor-led.png'

export default function DoctorLedSection() {
  return (
    <section className="bg-[#F0F9FF] pb-10 md:pb-16">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden md:flex-row md:items-stretch lg:mx-0 lg:max-w-none lg:min-h-[400px]">
        <div className="order-2 flex flex-col md:space-y-8 justify-center items-start max-md:items-center px-4 py-8 md:order-1 md:flex-1 md:py-12 md:pr-10 lg:w-1/2 lg:flex-none lg:pl-10 lg:pr-16 xl:pl-[8%]">
          <h2 className="text-2xl font-[1000] text-gray-900 md:text-3xl lg:text-4xl">
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
            className="mt-6 max-md:w-full rounded-lg bg-[#9361D7] md:px-16 py-3.5 md:text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get a Callback
          </button>
        </div>

        <div className="order-1 md:order-2 md:flex-1 lg:w-1/2 lg:flex-none">
          <img
            src={doctorLedImg}
            alt="Doctor at Clove Dental clinic"
            className="h-56 w-full object-cover object-top md:h-full md:min-h-[320px] lg:h-full lg:min-h-[400px]"
          />
        </div>
      </div>
    </section>
  )
}
