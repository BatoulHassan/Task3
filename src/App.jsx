import { useEffect, useState } from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import NavBar from "./components/Navbar/Navbar";
import Homepage from "./Pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Articles from "./Pages/Articles/Articles";
import ReadArticle from "./Pages/ReadArticle/ReadArticle";
import Contact from './Pages/Contact/Contact';
import Notfound from "./Pages/Error/404";

function App() {
	
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			
			 <Router>
				<NavBar />
			    <Routes>
				   <Route path="/" element={<Homepage />} />
				   <Route path="/about" element={<About />} />
				   <Route path="/projects" element={<Projects />} />
				   <Route path="/articles" element={<Articles />} />
			 	   <Route path="/article/:slug" element={<ReadArticle />} />
				   <Route path="/contact" element={<Contact />} />
			       <Route path="*" element={<Notfound />} />
			    </Routes> 
			    <Footer/>
			</Router> 
		</div>
	);
}

export default App;
