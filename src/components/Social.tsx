import { faCodepen, faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SocialIcons() {
  return (
    <div>
      <ul className="gap-4 w-[100%] socialIcons">
        <li>
          <a href="#" aria-label="Codepen">
            <FontAwesomeIcon icon={faCodepen} className="icon" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Twitter">
            <FontAwesomeIcon icon={faXTwitter} className="icon" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}
