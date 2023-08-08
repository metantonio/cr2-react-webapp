import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardPeople from "../component/cardPeople.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context)
	const [listaPersonas, setListaPersonas] = useState([])
	//para traernos la información de los personajes
	useEffect(() => {
		const cargaData = async () => {
			let responseObj = await actions.fetchGenerico("/people/")
			console.log("El valor de responseObj", responseObj)
			setListaPersonas(responseObj.results)
		}
		cargaData()
	}, [])


	return (
		<div className="container-fluid">
			{listaPersonas && listaPersonas.length > 0 ?
				<div className="overflow-auto">
					<div className="row d-flex flex-row flex-nowrap">
						{listaPersonas.map((item, index) => { return (<CardPeople name={item.name} gender={item.gender} id={item.url} />) })}
					</div>
				</div>
				:
				<>
				</>
			}
		</div>
	)
};
