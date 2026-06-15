export default function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-[#DCFCE7] via-[#E0F2FE] to-[#DCFCE7] px-4 py-2 text-center text-sm text-gray-800 md:text-base">
      Starting at{' '}
      <span className="text-gray-400 line-through">₹63,000</span>{' '}
      <span className="font-bold text-gray-900">₹47,999</span>. Hurry! Offer
      ends soon.
    </div>
  )
}
