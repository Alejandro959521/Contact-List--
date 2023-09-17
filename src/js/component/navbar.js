import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex flex-row-reverse">
			
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success">Add new Contact</button>
				</Link>
			</div>
		</nav>  
	);
};
