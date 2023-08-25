import React from "react";
import "./ProjectStyle.css";

const Project = (props) => {
	const { logo, title, description, href, host } = props;

	return (
		<React.Fragment>
			<div className="project">
				
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<a href={href} target="_blank" rel="noreferrer" className="source-link">
								<button className="btn-link">Source</button>
							</a>
 
							<a href={host} target="_blank" rel="noreferrer">
								<button className="btn-link">View</button>
							</a>
							
						</div>
					</div>
				
			</div>
		</React.Fragment>
	);
};

export default Project;


