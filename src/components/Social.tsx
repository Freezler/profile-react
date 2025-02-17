import { faCodepen, faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SocialIcons() {
  return (
    <div className="z-[1500] relative">
      <ul className="gap-4 align-bottom socialIcons">
        <li>
          <a href="https://codepen.io/freezler" aria-label="Codepen">
            <FontAwesomeIcon icon={faCodepen} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://x.com/randy64757" aria-label="Twitter">
            <FontAwesomeIcon icon={faXTwitter} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://nl.linkedin.com/in/randy-de-vries-858291278" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Freezler" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}
