import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import INFO from "../../data/user";
import SEO from "../../data/seo";
import "./HomePageStyle.css";
import Socials from "../../components/Common/Socials/Socials";
import Logo from "../../components/Common/Logo/Logo";
import Works from "../../components/Works/Works";
import Content from "../../components/Common/Content/Content";
import homeImg from '../../data/images/homepage.png';
const HomePage = () => {

    const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

    const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

    
  return (
    <React.Fragment>
        <Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

            <div className="page-content">
               <div className="content-wrapper">

			     <div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
				  </div>

                  <div className="homepage-container">
					<Content title={INFO.homepage.title} description={INFO.homepage.description} image={homeImg} />
                    <Socials />
					<Works />
                  </div> 

               </div>  
            </div> 
    </React.Fragment>
  )
}

export default HomePage