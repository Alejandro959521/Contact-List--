import React,{useContext,useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import {Context} from "../store/appContext"




export const Home3 = () => {
	const { store, actions } = useContext(Context)
	const [valor, setValor] = useState({
		full_name: "",
		email: "",
		phone: "",
		address: "",
		agenda_slug: "alejandro959521"

	})

	const info = (event) => {
		setValor({

			...valor,[event.target.name]: event.target.value
		})

	}

	const clickContact= async(event)=>{
		event.preventDefault()
		actions.putContact(valor)
			
}
	return (
		<div className="container">
			<div className="d-flex justify-content-center mt-4">
				<h1>Add a new contact</h1>
			</div>
			<h5>Full Name</h5>
			<input type="text" className="form-control my-3" placeholder="Full Name " 
			aria-label="Username" aria-describedby="addon-wrapping" onChange={info}
			 name="full_name" required value={valor.full_name}></input>
			<h5>Email</h5>
			<input type="text" className="form-control my-3" placeholder="Enter Email" aria-label="Username" aria-describedby="addon-wrapping" onChange={info} required name="email" value={valor.email} ></input>
			<h5>Phone</h5>
			<input type="text" className="form-control my-3" placeholder="Enter Phone" aria-label="Username" aria-describedby="addon-wrapping" onChange={info} required name="phone" value={valor.phone}></input>
			<h5>Address</h5>
			<input type="text" className="form-control my-3" placeholder="Enter Address" aria-label="Username" aria-describedby="addon-wrapping" onChange={info} required name="address" value={valor.address}></input>

			<div class="d-grid gap-2">
				<button className="btn btn-primary mt-3 fw-bold" type="button"
					onClick={clickContact}
				>Edit</button>
				<Link to="/">
					<span > or get back to contacts</span>

				</Link>


			</div>

		</div>
	)
};
