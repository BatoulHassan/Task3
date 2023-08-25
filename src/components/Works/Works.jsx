import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../Common/Card/Card";
import "./WorksStyle.css";
import facebookImg from '../../data/images/facebook.png';
import twitterImg from '../../data/images/twitter.png';

const Works = () => {
	
	return (
      <div className="homepage-works ">  
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={facebookImg}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-desc">
							  <div className="work-title">Facebook</div>
							  <div className="work-subtitle">
							 	Full Stack Web Developer
							  </div>
							  <div className="work-duration">2019 - Present</div>
							</div>
						</div>

						<div className="work">
							<img
								src={twitterImg}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-desc">
							    <div className="work-title">Twitter</div>
							    <div className="work-subtitle">
							       Full Stack Web Developer
							    </div>
							    <div className="work-duration">2012 - Present</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
     </div>
	);
};

export default Works;
