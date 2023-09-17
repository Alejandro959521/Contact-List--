import React, { useState, useContext ,useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";


function Card({ data }) {

  const { store, actions } = useContext(Context);

  const handleDeleteContact = () => {
    
    actions.deleteContact()
    actions.getContact()


  }
  const handleId = (id) => {

    store.id = id
    console.log("esto es store id", store.id)

  }
const idFastidioso = (id)=>{
  store.id = id
  
}

  return (

    <div className="card d-flex justify-content-center w-100"  >
      <div className="row g-0" >
        <div className="col-3 ">
          <img className="imagenperfil  p-4" src="https://img.freepik.com/foto-gratis/retrato-mujer-europea-feliz-tiene-amplia-sonrisa-cierra-ojos-siente-emocion-alto-espiritu_273609-17641.jpg" alt="...">
          </img>
        </div>

        <div className="col-9 text-left p-4">
          <button type="button" className="btn btn-outline-light text-dark float-end m-1"  data-bs-toggle="modal" data-bs-target="#exampleModal"
            onClick={() => { idFastidioso(data.id) }}
          ><i className="fa fa-trash fa-fw"> </i> </button>

           <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure ?</h1>    
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                </div>
                <div className="modal-body">
                   If you delete this thing the entere universe will go down !
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">oh no !</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                  onClick={() => { handleDeleteContact() }}
                  >Yes baby</button>
                </div>
              </div>
            </div>
          </div> 

          < Link to="/Edit">
            <button type="button" className="btn btn-outline-light text-dark float-end m-1"
              onClick={() => { handleId(data.id) }}
            > <i className="fa-solid fa-pencil " > </i>  </button>
          </Link>
          <h4 className="card-title m-3">{data.full_name}</h4>
          <span className="fa fa-map-marker fa-fw text-muted m-2"></span>
          <span className="text-muted small fs-5">{data.address}</span>
          <br></br>
          <span className="fa fa-phone fa-fw text-muted m-2"></span>
          <span className="text-muted small fs-5">{data.phone}</span>
          <br></br>
          <span className="fa fa-envelope fa-fw text-muted m-2"></span>
          <span className="text-muted small fs-5">{data.email}</span>

        </div>
      </div>
    </div>

  )

}

export default Card;