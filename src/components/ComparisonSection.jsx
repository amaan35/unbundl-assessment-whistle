import { useState } from 'react'
import data from '../data/data.json'
import whistleLogo from '../assets/header-whistle-and-smile-logo.png'

function ChevronIcon({ expanded }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-300 ease-in-out ${
        expanded ? 'rotate-180' : ''
      }`}
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

function CheckIcon() {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-white md:h-8 md:w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  )
}

function CrossIcon() {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white md:h-8 md:w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  )
}

function CellValue({ cell }) {
  if (cell.type === 'check') return <CheckIcon />
  if (cell.type === 'cross') return <CrossIcon />
  return (
    <span className="px-2 text-center text-xs font-medium text-gray-800 md:text-sm">
      {cell.value}
    </span>
  )
}

function ComparisonRow({ feature, isExpanded, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <div className="grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr]">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isExpanded}
          className="flex items-center justify-between gap-2 px-3 py-4 text-left transition-colors hover:bg-gray-50 md:px-6 md:py-5"
        >
          <span className="text-xs font-semibold text-gray-900 md:text-sm">
            {feature.title}
          </span>
          <ChevronIcon expanded={isExpanded} />
        </button>

        <div className="flex items-center justify-center bg-[#EAF4FB] px-2 py-4 md:py-5">
          <CellValue cell={feature.whistle} />
        </div>

        <div className="flex items-center justify-center px-2 py-4 md:py-5">
          <CellValue cell={feature.otherBrands} />
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
          <div className="overflow-hidden">
            <div
              className={`bg-[#DBEAFE] px-4 py-4 text-xs leading-relaxed text-gray-700 transition-opacity duration-300 ease-in-out md:px-6 md:py-5 md:text-sm ${
                isExpanded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {feature.description}
            </div>
          </div>
      </div>
    </div>
  )
}

export default function ComparisonSection() {
  const [expandedIds, setExpandedIds] = useState(new Set())

  const toggleRow = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <section className="bg-white px-4 py-10 md:px-10 md:py-16">
      <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
        What sets Whistle apart?
      </h2>

      <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-gray-200 md:rounded-3xl">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-gray-200 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="px-3 py-4 md:px-6 md:py-5">
            <span className="text-xs font-bold text-gray-900 md:text-sm">
              Features
            </span>
          </div>
          <div className="flex items-center justify-center bg-[#EAF4FB] px-2 py-4 md:py-5">
            <img
              src={whistleLogo}
              alt="Whistle"
              className="h-7 w-auto md:h-8"
            />
          </div>
          <div className="flex items-center justify-center px-2 py-4 md:py-5">
            <span className="text-xs font-bold text-gray-900 md:text-sm">
              Other Brands
            </span>
          </div>
        </div>

        {data.comparisonFeatures.map((feature) => (
          <ComparisonRow
            key={feature.id}
            feature={feature}
            isExpanded={expandedIds.has(feature.id)}
            onToggle={() => toggleRow(feature.id)}
          />
        ))}
      </div>
    </section>
  )
}
