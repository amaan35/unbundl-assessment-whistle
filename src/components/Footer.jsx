import data from '../data/data.json'

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M14 8h2.5V4h-3c-2.76 0-4.5 1.7-4.5 4.6V12H6v4h3v8h4v-8h3.4l.6-4H13v-2.4c0-1.1.3-1.6 1.5-1.6z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.5 8.574L22.5 22h-6.68l-5.23-6.04L4.8 22H1.54l8.04-9.18L1 2h6.82l4.73 5.48L18.244 2zm-2.34 18h1.76L7.08 3.96H5.22L15.904 20z" />
    </svg>
  )
}

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
}

function SocialIcons({ className = '' }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {data.footer.socialLinks.map((link) => {
        const Icon = socialIconMap[link.id]
        return (
          <a
            key={link.id}
            href={link.href}
            aria-label={link.label}
            className="text-white transition-opacity hover:opacity-80"
          >
            <Icon />
          </a>
        )
      })}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          <div>
            <h3 className="text-sm font-bold md:text-base">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {data.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/90 transition-opacity hover:opacity-80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold md:text-base">
              Get in Touch Now!
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${data.footer.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-white/90 transition-opacity hover:opacity-80"
                >
                  <PhoneIcon />
                  {data.footer.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${data.footer.contact.email}`}
                  className="flex items-center gap-2 text-sm text-white/90 transition-opacity hover:opacity-80"
                >
                  <EmailIcon />
                  {data.footer.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-bold md:text-base">Follow us on</h3>
            <SocialIcons className="mt-4" />
          </div>

          <ul className="hidden space-y-3 md:block">
            {data.footer.legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/90 transition-opacity hover:opacity-80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 md:hidden">
          <ul className="flex flex-wrap justify-center gap-6">
            {data.footer.legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/90 transition-opacity hover:opacity-80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center md:hidden">
          <h3 className="text-sm font-bold">Follow us on</h3>
          <SocialIcons className="mt-4 justify-center" />
        </div>
      </div>
    </footer>
  )
}
