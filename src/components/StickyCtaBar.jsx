export default function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 hidden border-t border-gray-200 bg-[#F5F5F5] md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-10 py-4">
        <p className="text-base font-bold text-gray-800 lg:text-lg">
          Ready for your perfect smile?
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg bg-[#9361D7] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Book scan at Home
          </button>
          <button
            type="button"
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition-opacity hover:opacity-90"
          >
            Book scan at Clinic
          </button>
        </div>
      </div>
    </div>
  )
}
