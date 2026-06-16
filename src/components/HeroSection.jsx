import { useState } from 'react'
import womanHero from '../assets/woman-in-hero-section.png'
import cloveLogo from '../assets/clove-logo.png'

function ChevronIcon({ up }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 transition-transform ${up ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function LeadForm() {
  const [teethIssue, setTeethIssue] = useState('')

  return (
    <div className="bg-white px-4 py-8 md:px-10 md:py-10">
      <h2 className="text-center text-lg font-bold text-gray-900 md:text-xl">
        Do you have Teeth Gaps or Crooked Teeth?
      </h2>

      <div className="mt-5 flex items-center justify-center gap-8">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-800">
          <input
            type="radio"
            name="teethIssue"
            value="yes"
            checked={teethIssue === 'yes'}
            onChange={(e) => setTeethIssue(e.target.value)}
            className="h-4 w-4 accent-[#9361D7]"
          />
          Yes
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-800">
          <input
            type="radio"
            name="teethIssue"
            value="no"
            checked={teethIssue === 'no'}
            onChange={(e) => setTeethIssue(e.target.value)}
            className="h-4 w-4 accent-[#9361D7]"
          />
          No
        </label>
      </div>

      <div className="mx-auto mt-6 max-w-2xl lg:max-w-5xl">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:items-end lg:gap-4">
          <div className="flex flex-col gap-4 md:flex-row lg:contents">
            <div className="min-w-0 flex-1 lg:w-full">
              <label
                htmlFor="fullName"
                className="mb-1.5 block text-xs font-medium text-gray-700"
              >
                Full Name*
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Ajay Kumar"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#9361D7] focus:outline-none focus:ring-1 focus:ring-[#9361D7]"
              />
            </div>
            <div className="min-w-0 flex-1 lg:w-full">
              <label
                htmlFor="mobile"
                className="mb-1.5 block text-xs font-medium text-gray-700 lg:sr-only"
              >
                Mobile number
              </label>
              <div className="flex overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:border-[#9361D7] focus-within:ring-1 focus-within:ring-[#9361D7]">
                <span className="flex items-center border-r border-gray-300 bg-gray-50 px-3 text-sm text-gray-600 lg:hidden">
                  +91
                </span>
                <input
                  id="mobile"
                  type="tel"
                  placeholder="Mobile number*"
                  className="w-full px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="hidden w-full rounded-lg bg-[#9361D7] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:block"
          >
            Book a Free Scan
          </button>
        </div>

        <label className="mt-4 flex cursor-pointer items-start gap-2">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#9361D7]"
          />
          <span className="text-xs leading-relaxed text-gray-500">
            I hereby consent to receive calls / messages from Whistle and its
            partners and override DND settings.
          </span>
        </label>

        <button
          type="button"
          className="mt-6 block w-full rounded-lg bg-[#9361D7] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:hidden"
        >
          Book a Free Scan
        </button>
      </div>
    </div>
  )
}

function ClinicLocator() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-[#F0F7FF] px-4 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-6xl md:rounded-[32px] md:bg-[#F0F7FF]">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <h2 className="text-base font-bold leading-snug text-gray-900 md:max-w-xl md:text-xl lg:text-2xl">
            <span className="hidden md:inline">
              Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove
              Dental Clinic near you.
            </span>
            <span className="md:hidden">
              Book Free Orthodontist Consult at a Clove Dental Clinic. 450+
              Clinics near you
            </span>
          </h2>

          <div className="flex items-center justify-between md:flex-col md:items-end">
            <img
              src={cloveLogo}
              alt="Clove Dental"
              className="h-10 w-auto md:h-12"
            />
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-sm font-medium text-[#9361D7] md:mt-3"
              aria-expanded={expanded}
            >
              Find Clinic
              <ChevronIcon up={expanded} />
            </button>
          </div>
        </div>

        {expanded && (
          <form
            className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:border-[#9361D7] focus-within:ring-1 focus-within:ring-[#9361D7]">
              <span className="flex items-center border-r border-gray-300 bg-gray-50 px-3 text-sm text-gray-600">
                +91
              </span>
              <input
                type="tel"
                placeholder="Mobile number*"
                className="w-full px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            <div className="flex gap-3 md:contents">
              <input
                type="text"
                placeholder="Enter Captcha"
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#9361D7] focus:outline-none focus:ring-1 focus:ring-[#9361D7] md:flex-none"
              />
              <div className="flex w-20 shrink-0 items-center justify-center rounded-lg bg-[#DBEAFE] text-lg font-semibold text-[#9361D7] md:w-auto md:px-6">
                234
              </div>
            </div>

            <div className="relative">
              <select
                defaultValue=""
                className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-400 focus:border-[#9361D7] focus:outline-none focus:ring-1 focus:ring-[#9361D7]"
              >
                <option value="" disabled>
                  Select City
                </option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <ChevronIcon up={false} />
              </span>
            </div>

            <div className="relative">
              <select
                defaultValue=""
                className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-400 focus:border-[#9361D7] focus:outline-none focus:ring-1 focus:ring-[#9361D7]"
              >
                <option value="" disabled>
                  Select Clinic
                </option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <ChevronIcon up={false} />
              </span>
            </div>

            <button
              type="submit"
              className="rounded-lg bg-[#9361D7] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:col-span-1"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section>
      <div className="hero-gradient relative h-[40vh] overflow-hidden min-[1200px]:h-[45vh]">
        <div className='flex flex-col space-y-5 px-[5%] max-md:pt-[10%] pt-[7%] min-[1000px]:px-[8%]'>
          <h1 className="text-wrap font-bold text-2xl w-full min-[361px]:w-[65%] min-[540px]:text-3xl min-[820px]:w-[75%] min-[1000px]:text-[2rem] min-[1200px]:text-[2.5rem]">Invisible Aligners for a dream smile</h1>
          <p className='w-[50%] text-wrap min-[540px]:text-xl min-[1000px]:text-2xl min-[1200px]:text-[1.5rem]'>Book a Scan and avail a free Orthodontist Consult {' '}
            <span className='font-bold text-[#9361D7]'>worth ₹1500</span></p>
        </div>
        <img
          src={womanHero}
          alt="Smiling woman"
          className="absolute bottom-0 right-2 min-[610px]:right-[10%] md:right-[12%] lg:right-[17%] xl:right-[20%] 2xl:right-[25%] h-[92%] w-auto max-w-[min(50%,420px)] object-contain object-bottom"
        />
      </div>

      <LeadForm />
      <ClinicLocator />
    </section>
  )
}
