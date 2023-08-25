import React from 'react';
import './FooterStyle.css';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="content-wrapper">
         <div className="homepage-container">
            <div className="page-footer">

			  <div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="footer-nav-link-item">
							<NavLink to="/about">About</NavLink>
						</li>
						<li className="footer-nav-link-item">
							<NavLink to="/projects">Projects</NavLink>
						</li>
						<li className="footer-nav-link-item">
							<NavLink to="/articles">Articles</NavLink>
						</li>
						<li className="footer-nav-link-item">
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Karam Mustafa All Rights Reserved.
					</div>
				</div>
			  </div> {/* End footer */}

            </div>  {/* End page-footer */}
         </div> {/*End homepage-container */}
        </div> {/* End content-wrapper */}
     </div> {/* End page-content */}
		</React.Fragment>
  )
}

export default Footer