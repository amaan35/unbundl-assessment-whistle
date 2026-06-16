import whistleAligners from '../assets/whistle-aligners.png'

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 shrink-0 text-green-500"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function ProductSection() {
  return (
    <section className="bg-[#F0F9FF] px-4 py-10 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        <div className="flex-1 lg:max-w-md">
          <h2 className="text-2xl font-bold leading-tight text-gray-900 md:text-left md:text-3xl lg:text-4xl">
            Dream smiles achieved secretly
          </h2>
          <p className="mt-4 hidden text-sm leading-relaxed text-gray-700 md:block md:text-base">
            Experience the superior quality of our Whistle Aligners crafted with
            3-layer PU material. With 450+ clinics nationwide, enjoy comfortable
            treatment by expert orthodontists at House of Clove.
          </p>
          <p className="mt-4 hidden text-xs leading-relaxed text-gray-500 md:block">
            The pricing is different for every case. Cases with higher complexity
            requiring more aligners and additional time and effort from our
            dentists.
          </p>
        </div>

        <div className="mx-auto w-full max-w-md flex-1 rounded-2xl bg-white p-6 shadow-md md:max-w-lg">
          <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-0">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Whistle Aligners
              </h3>
              <div className="mt-2 text-sm text-gray-700">
                <p className="text-gray-400 line-through">₹84,000</p>
                <p>
                  starting at{' '}
                  <span className="text-lg font-bold text-[#9361D7]">
                    ₹47,999
                  </span>
                </p>
                <p className="text-xs text-gray-500">inc. of all taxes</p>
              </div>

              <ul className="mt-4 space-y-2">
                <li className="flex items-center max-sm:text-xs gap-2 text-sm text-gray-700">
                  <CheckIcon />
                  Offer valid for a limited time
                </li>
                <li className="flex items-center max-sm:text-xs gap-2 text-sm text-gray-700">
                  <CheckIcon />
                  Easy financing options
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-end justify-between">
              <img
                src={whistleAligners}
                alt="Whistle Aligners case"
                className="h-24 w-24 shrink-0 object-contain md:h-28 md:w-28"
              />
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#9361D7] hover:underline"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-6xl text-center text-sm leading-relaxed text-gray-700 md:hidden">
        Experience the superior quality of our Whistle Aligners crafted with
        3-layer PU material. With 450+ clinics nationwide, enjoy comfortable
        treatment by expert orthodontists at House of Clove.
      </p>
      <p className="mx-auto mt-4 max-w-6xl text-center text-xs leading-relaxed text-gray-500 md:hidden">
        The pricing is different for every case. Cases with higher complexity
        requiring more aligners and additional time and effort from our
        dentists.
      </p>
    </section>
  )
}
