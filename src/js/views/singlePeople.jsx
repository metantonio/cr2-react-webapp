import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePeople = props => {
    const { store, actions } = useContext(Context);
    const [people, setPeople] = useState({})
    const params = useParams(); //es un hook que nos ayuda a leer la información de la url

    useEffect(() => {
        console.log("params: ", params.id)
        const cargaData = async () => {
            let responseObj = await actions.fetchGenerico("/people/" + params.id)
            console.log("El valor de People responseObj:", responseObj)
            setPeople(responseObj)
        }
        cargaData()
    }, [])

    return (
        <div className="jumbotron">
            <h1>El nombre del persona es: {people.name ? people.name : ""}</h1>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

export default SinglePeople;
