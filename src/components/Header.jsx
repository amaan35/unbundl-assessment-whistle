import whistleLogo from '../assets/header-whistle-and-smile-logo.png'
import footer from '../data/footer.json'

const phoneNumber = footer.contact.phone.replace(/-/g, '')

function PhoneRingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M15.5 3.5c1.2.8 2 2.1 2 3.5"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M17.5 1.5c2 1.3 3.3 3.5 3.3 6"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M13.5 5.5c.7.45 1.15 1.15 1.25 2"
      />
    </svg>
  )
}

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-3 md:px-10 md:py-4">
      <img
        src={whistleLogo}
        alt="Whistle and Smile"
        className="h-8 w-auto md:h-12"
      />
      <a
        href={`tel:${phoneNumber}`}
        aria-label={`Call us at ${phoneNumber}`}
        className="flex items-center gap-2 rounded-full bg-[#9361D7] px-2 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90 md:gap-2.5 md:px-5 md:py-3 md:text-base"
      >
        <PhoneRingIcon />
        {phoneNumber}
      </a>
    </header>
  )
}
