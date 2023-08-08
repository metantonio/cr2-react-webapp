import React from "react";
import { Link } from "react-router-dom";

const CardPeople = (props) => {
    let partes = props.id.split("/"); //devuelve un arreglo => [https, swapi.dev, api , 1, ""]
    let id = partes[partes.length - 2]; //nos quedamos con el 1

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Gender: {props.gender}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <Link to={"/people/" + id}><button className="btn btn-primary">Learn More!</button></Link>

            </div>
        </div>
    )

}

export default CardPeople;