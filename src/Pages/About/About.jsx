import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Logo from "../../components/Common/Logo/Logo";
import INFO from "../../data/user";
import SEO from "../../data/seo";
import "./AboutStyle.css";
import AboutSocials from "../../components/AboutSocials/AboutSocials";
import Content from "../../components/Common/Content/Content";
import Socials from "../../components/Common/Socials/Socials";
import aboutImg from '../../data/images/about.jpg';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<div className="content-wrapper">

					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<Content title={INFO.about.title} description={INFO.about.description} image={aboutImg} />
						<AboutSocials />
                        <div className="about-socials-mobile">
					       <Socials />
				        </div>  
				    </div>

                </div>
			</div>
		</React.Fragment>
	);
};

export default About;
