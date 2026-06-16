import data from '../data/data.json'
import resultsGapsBefore from '../assets/results-gaps-before.png'
import resultsGapsAfter from '../assets/results-gaps-after.png'
import crookedTeethBefore from '../assets/crooked-teeth-before.png'
import crookedTeethAfter from '../assets/crooked-teeth-after.png'
import openbiteBefore from '../assets/openbite-before.png'
import openbiteAfter from '../assets/openbite-after.png'
import protrudingTeethBefore from '../assets/protruding-teeth-before.png'
import protrudingTeethAfter from '../assets/protruding-teeth-after.png'

const imageMap = {
  'results-gaps-before.png': resultsGapsBefore,
  'results-gaps-after.png': resultsGapsAfter,
  'crooked-teeth-before.png': crookedTeethBefore,
  'crooked-teeth-after.png': crookedTeethAfter,
  'openbite-before.png': openbiteBefore,
  'openbite-after.png': openbiteAfter,
  'protruding-teeth-before.png': protrudingTeethBefore,
  'protruding-teeth-after.png': protrudingTeethAfter,
}

function ResultCard({ result }) {
  return (
    <article className="w-[280px] shrink-0 rounded-xl bg-[#F0F9FF] p-2 md:w-auto md:flex-1">
      <div className="grid grid-cols-2 gap-1">
        <div>
          <img
            src={imageMap[result.beforeImage]}
            alt={`Before - ${result.concern}`}
            className="aspect-square w-full rounded-sm object-cover"
          />
          <p className="mt-2 text-center text-xs text-gray-600">Before</p>
        </div>
        <div>
          <img
            src={imageMap[result.afterImage]}
            alt={`After - ${result.concern}`}
            className="aspect-square w-full rounded-sm object-cover"
          />
          <p className="mt-2 text-center text-xs text-gray-600">After</p>
        </div>
      </div>

      <div className="mt-3 border-t border-[#BAE6FD] text-sm text-gray-700">
        <div className="flex items-center justify-between border-b border-[#BAE6FD] py-2.5">
          <span>Concern</span>
          <span className="text-gray-900">{result.concern}</span>
        </div>
        <div className="flex items-center justify-between py-2.5">
          <span>Treatment Duration</span>
          <span className="text-gray-900">{result.duration}</span>
        </div>
      </div>
    </article>
  )
}

export default function ResultsSection() {
  return (
    <section className="bg-white py-10 md:px-10 md:py-16">
      <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
        Results You&apos;ll Love
      </h2>

      <div className="scrollbar-hide mt-8 flex gap-4 overflow-x-auto px-4 pb-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
        {data.results.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
    </section>
  )
}
