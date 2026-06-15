import { useState } from 'react'
import womanHero from '../assets/woman-in-hero-section.png'
import cloveLogo from '../assets/clove-logo.png'

function ChevronIcon({ up }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 transition-transform ${up ? '' : 'rotate-180'}`}
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

      <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <label
            htmlFor="fullName"
            className="mb-1.5 block text-xs font-medium text-gray-700"
          >
            Full Name<span className="md:hidden">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Ajay Kumar"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#9361D7] focus:outline-none focus:ring-1 focus:ring-[#9361D7]"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="mobile"
            className="mb-1.5 block text-xs font-medium text-gray-700 md:sr-only"
          >
            Mobile number
          </label>
          <div className="flex overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:border-[#9361D7] focus-within:ring-1 focus-within:ring-[#9361D7]">
            <span className="flex items-center border-r border-gray-300 bg-gray-50 px-3 text-sm text-gray-600">
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

      <label className="mx-auto mt-4 flex max-w-2xl cursor-pointer items-start gap-2">
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
        className="mx-auto mt-6 block w-full max-w-2xl rounded-lg bg-[#9361D7] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Book a Free Scan
      </button>
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
      <div className="hero-gradient relative overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-row items-end">
          <div className="flex-1 px-4 pb-6 pt-8 md:px-10 md:pb-10 md:pt-12">
            <h1 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl md:text-4xl lg:text-[42px]">
              Invisible Aligners for a dream smile
            </h1>
            <p className="mt-2 text-xs leading-relaxed text-gray-700 sm:mt-3 sm:text-sm md:text-base">
              Book a Scan and avail a free Orthodontist Consult{' '}
              <span className="font-bold text-[#9361D7]">worth ₹1500</span>
            </p>
          </div>
          <div className="relative flex w-[42%] shrink-0 justify-end sm:w-[38%] md:w-[45%] lg:w-[42%]">
            <img
              src={womanHero}
              alt="Smiling woman"
              className="relative z-10 h-auto w-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      <LeadForm />
      <ClinicLocator />
    </section>
  )
}
