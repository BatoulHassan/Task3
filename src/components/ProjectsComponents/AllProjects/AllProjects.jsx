import React from "react";
import Project from "../Project/Project";
import INFO from "../../../data/user";
import "./AllProjects.css";

const AllProjects = () => {
	
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						href={project.href}
						host={project.host}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
