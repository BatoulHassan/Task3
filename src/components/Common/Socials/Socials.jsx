import './SocialsStyle.css';
import INFO from "../../../data/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Socials = () => {
	
  return (
    <div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
  )
}

export default Socials