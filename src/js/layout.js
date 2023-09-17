import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home3 } from "./views/Home3";
import { Home } from "./views/Home";
import { Home2 } from "./views/Home2";
import injectContext from "./store/appContext";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		
		<div className=" ">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/List" element={<Home2 />} />	
						<Route path="/Edit" element={<Home3 />} />					
						<Route path="*" element={<h1>Not found!</h1>}/>
					</Routes>
					
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
