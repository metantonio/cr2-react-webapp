import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams(); //es un hook que nos ayuda a leer la información de la url
	/* Paso 3: traernos la variable dinámica deinida en el layout.js, :indiceVariable */
	//usando params.indiceVariable
	//Como en el Paso 2, habíamos hecho la navegación con Link to, usando el índice del arreglo,
	//params.indiceVariable tiene relacionado el índide del mismo arreglo
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[params.indiceVariable].title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
