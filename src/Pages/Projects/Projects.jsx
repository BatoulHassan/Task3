import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Logo from "../../components/Common/Logo/Logo";
import AllProjects from "../../components/ProjectsComponents/AllProjects/AllProjects";
import INFO from "../../data/user";
import SEO from "../../data/seo";
import "./ProjectsStyle.css";

const Projects = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<div className="content-wrapper">

					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="projects-container">
						<div className="title projects-title">
							Below is a quick overview of my main skills.
						</div>

						<div className="subtitle projects-subtitle">
						I've worked on a personal blogs on my journey of learning
						 and I'm proud of the progress I've made. I use my skills in
						 html, css, javascript, bootstrap, react and css libraries
						 to convert figma designs into webpages.
						 I'm always looking for opportunities to improve my skills.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div> {/* End projects-container */}

				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
