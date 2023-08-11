import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardPeople from "../component/cardPeople.jsx";
import CardVehicle from "../component/cardVehicle.jsx";
import CardPlanet from "../component/cardPlanet.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [listaPersonas, setListaPersonas] = useState([]);
	const [listaVehiculos, setListaVehiculos] = useState([]);
	const [listaPlanets, setListaPlanets] = useState([]);

	useEffect(() => {
		const cargaData = async () => {
			const responsePersonas = await actions.fetchGenerico("/people/");
			console.log("El valor de responsePersonas", responsePersonas);
			setListaPersonas(responsePersonas.results);
		};
		const cargaVehiculos = async () => {
			const responseVehiculos = await actions.fetchGenerico("/vehicles/");
			console.log("El valor de responseVehiculos", responseVehiculos);
			setListaVehiculos(responseVehiculos.results);
		};
		const cargaPlanets = async () => {
			const responsePlanets = await actions.fetchGenerico("/planets/"); // Cambia a "/planets/"
			console.log("El valor de responsePlanets", responsePlanets);
			setListaPlanets(responsePlanets.results);
		};

		cargaPlanets();
		cargaData();
		cargaVehiculos();
	}, []);

	return (

		<div className="container-fluid">
			<strong><p className="rojo">Characters</p> </strong>
			{listaPersonas && listaPersonas.length > 0 && (
				<div className="overflow-auto">
					<div className="row d-flex flex-row flex-nowrap">
						{listaPersonas.map((item, index) => (
							<CardPeople key={index} name={item.name} gender={item.gender} id={item.url} />
						))}
					</div>
				</div>
			)}
			<strong><p className="rojo">Planets</p> </strong>
			{listaVehiculos && listaVehiculos.length > 0 && (
				<div className="overflow-auto">
					<div className="row d-flex flex-row flex-nowrap">
						{listaVehiculos.map((item, index) => (
							<CardVehicle key={index} name={item.name} model={item.model} id={item.url} />
						))}
					</div>
				</div>
			)}
			<strong><p className="rojo">Vehicles</p> </strong>
			{listaPlanets && listaPlanets.length > 0 && (
				<div className="overflow-auto">
					<div className="row d-flex flex-row flex-nowrap">
						{listaPlanets.map((item, index) => (
							<CardPlanet key={index} name={item.name} terrain={item.terrain} id={item.url} /> // Cambia a CardVehicle
						))}
					</div>
				</div>
			)}
		</div>
	);
};