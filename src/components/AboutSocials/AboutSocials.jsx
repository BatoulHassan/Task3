import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    	faTwitter,
	    faGithub,
	    faLinkedin,
	    faInstagram,
	    faStackOverflow
       } from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";
import './AboutSocials.css';

const AboutSocials = () => {

  return (
    <div className='about-socials'>
      <div className="socials">
		
		<div className='first-column-social'>
			<div className="social">
				<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faTwitter}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Twitter</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>
		</div> {/* End first-column */}

        <div className='second-column-social'>
			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.instagram}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faInstagram}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Instagram</div>
				</a>
			</div>
		</div> {/* End second-column */}

		<div className='third-column-social'>
			<div className="social">
				<a href={INFO.socials.stackoverflow} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faStackOverflow}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Stackoverflow</div>
				</a>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</div> {/* End third-column */}

	  </div>
    </div>
  )
}

export default AboutSocials