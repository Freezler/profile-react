import { faCodepen, faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SocialIcons() {
  const socialLinks = [
    { icon: faCodepen, href: 'https://codepen.io/freezler', label: 'Visit my Codepen profile' },
    { icon: faXTwitter, href: 'https://x.com/randy64757', label: 'Follow me on X (Twitter)' },
    { icon: faLinkedinIn, href: 'https://nl.linkedin.com/in/randy-de-vries-858291278', label: 'Connect with me on LinkedIn' },
    { icon: faGithub, href: 'https://github.com/Freezler', label: 'Check out my GitHub projects' },
  ]

  return (
    <div className="z-[1500] flex flex-col justify-end items-center mt-12 mb-4 w-full max-w-[100svw] text-zinc-100 antialiased select-none">
      <h3 className="bg-clip-text bg-gradient-to-tr from-[#87ddf0] to-[#deb7ef] border-[--badass] border-y-4 border-double font-bold text-[--bright-pink] text-[clamp(1.2rem,2vw,1.6rem)] text-center">WHERE TO FIND ME</h3>
      <ul className="grid socialIcons">
        {socialLinks.map(({ icon, href, label }) => (
          <li key={href}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={href}
              aria-label={label}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bright-pink focus-visible:ring-offset-2"
            >
              <FontAwesomeIcon icon={icon} className="icon" />
            </a>
          </li>
        ))}
      </ul>

    </div>
  )
}
