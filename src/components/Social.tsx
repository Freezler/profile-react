import { faCodepen, faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SocialIcons() {
  return (
    <div className="z-[1500] relative place-self-center grid align-bottom">

      <ul className="gap-2 grid socialIcons">
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
      <h3 className="bg-clip-text bg-gradient-to-tr from-[#0dc4ee] to-[#640d89] drop-shadow-[0_0_3px_rgba(155,5,5,0.95)] mb-4 border-[--badass] border-y-2 font-bold text-[clamp(1.2rem,2vw,1.6rem)] text-transparent text-center tracking-wider">WHERE TO FIND ME</h3>
    </div>
  )
}
