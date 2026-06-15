import { useState } from 'react'
import data from '../data/data.json'

function ToggleIcon({ expanded }) {
  return (
    <span
      className="relative ml-4 flex h-5 w-5 shrink-0 items-center justify-center"
      aria-hidden="true"
    >
      <span className="absolute h-0.5 w-4 rounded-full bg-gray-900" />
      <span
        className={`absolute h-4 w-0.5 origin-center rounded-full bg-gray-900 transition-transform duration-300 ease-in-out ${
          expanded ? 'rotate-90' : 'rotate-0'
        }`}
      />
    </span>
  )
}

function FaqItem({ faq, isExpanded, onToggle }) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="flex w-full items-center justify-between py-5 text-left md:py-6"
      >
        <span className="pr-4 text-base font-bold text-gray-900 md:text-lg">
          {faq.question}
        </span>
        <ToggleIcon expanded={isExpanded} />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`max-w-4xl pb-5 text-sm leading-relaxed text-gray-600 transition-opacity duration-300 ease-in-out md:pb-6 md:text-base ${
              isExpanded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const [expandedIds, setExpandedIds] = useState(new Set())

  const toggleFaq = (id) => {
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
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          <span className="block text-gray-900 md:inline md:text-[#9361D7]">
            Got Questions?
          </span>
          <span className="block text-gray-900 md:ml-1 md:inline">
            We&apos;ve got answers
          </span>
        </h2>

        <div className="mt-8 border-t border-gray-200 md:mt-12">
          {data.faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isExpanded={expandedIds.has(faq.id)}
              onToggle={() => toggleFaq(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
