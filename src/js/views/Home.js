import React, { useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../component/Card.jsx"
import { Context } from "../store/appContext"

export const Home = () => {

	const { actions, store } = useContext(Context)

	useEffect(() => {
		actions.getContact()		
	}, [])

	return (
<div className="bg-dark">
		<div className="container">
			<nav className="navbar navbar-light bg-light d-flex justify-content-center">

				<div className="ml-auto">
					<Link to="/List">
						<button className="btn btn-success">Add new Contact</button>
					</Link>
				</div>
			</nav>
			<div>
				{
					store.Contacts.map((item, index) => (

						<Card data={item} key ={index} />
					))
				}
			</div>
		</div>
		</div>
	);
}