import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Logo from "../../components/Common/Logo/Logo";
import INFO from "../../data/user";
import SEO from "../../data/seo";
import "./ContactStyle.css";
import Socials from "../../components/Common/Socials/Socials";

const Contact = () => {
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
						     . Finally, if you prefer to connect on
							social media, you will find me, and I'll be happy to
							follow me, and get in touch with you.
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div> 

				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
