import results from '../data/results.json'

function ResultCard({ result }) {
  const beforeUrl = `https://picsum.photos/seed/${result.id}-before/400/400`
  const afterUrl = `https://picsum.photos/seed/${result.id}-after/400/400`

  return (
    <article className="w-[280px] shrink-0 rounded-xl bg-[#F0F9FF] p-2 md:w-auto md:flex-1">
      <div className="grid grid-cols-2 gap-1">
        <div>
          <img
            src={beforeUrl}
            alt={`Before - ${result.concern}`}
            className="aspect-square w-full rounded-sm object-cover"
          />
          <p className="mt-2 text-center text-xs text-gray-600">Before</p>
        </div>
        <div>
          <img
            src={afterUrl}
            alt={`After - ${result.concern}`}
            className="aspect-square w-full rounded-sm object-cover"
          />
          <p className="mt-2 text-center text-xs text-gray-600">After</p>
        </div>
      </div>

      <div className="mt-3 border-t border-[#BAE6FD] text-sm text-gray-700">
        <div className="flex items-center justify-between border-b border-[#BAE6FD] py-2.5">
          <span>Concern</span>
          <span className="text-gray-900 text-end">{result.concern}</span>
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
        {results.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
    </section>
  )
}
