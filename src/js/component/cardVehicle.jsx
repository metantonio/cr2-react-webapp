import React from "react";
import Image from "../../img/imagenstar.png";
import { Link } from "react-router-dom";

const CardVehicle = (props) => {
    let partes = props.id.split("/"); //devuelve un arreglo => [https, swapi.dev, api , 1, ""]
    let id = partes[partes.length - 2]; //nos quedamos con el 1

    return (
        <div className="container card main" style={{ width: "18rem" }}>
            <img src={props.image || Image} className="card-img-top laim" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Model: {props.model}</p>
                <Link to={"/people/" + id}><button className=" link btn btn-primary">Learn More!</button></Link>
                <a href="#" className="btn btn-warning like"><i class="far fa-heart cora"></i></a>

            </div>
        </div>
    )

}

export default CardVehicle;