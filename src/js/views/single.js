import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/MoreInfo.css"

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">

			<h1>{store.charactersStarWars.length != 0 ? store.charactersStarWars[params.theid].name : 'Loading'}</h1>
			<div className="Extra-info">
				<h3>{store.charactersStarWars.length != 0 ? "Height:" + " " + store.charactersStarWars[params.theid].height : 'Loading'}</h3>
				<h3>{store.charactersStarWars.length != 0 ? "Mass:" + " " + store.charactersStarWars[params.theid].mass : 'Loading'}</h3>
				<h3>{store.charactersStarWars.length != 0 ? "Hair Color:" + " " + store.charactersStarWars[params.theid].hair_color : 'Loading'}</h3>
				<h3>{store.charactersStarWars.length != 0 ? "Skin Color:" + " " + store.charactersStarWars[params.theid].skin_color : 'Loading'}</h3>
				<h3>{store.charactersStarWars.length != 0 ? "Eye Color:" + " " + store.charactersStarWars[params.theid].eye_color : 'Loading'}</h3>
				<h3>{store.charactersStarWars.length != 0 ? "Birth Year:" + " " + store.charactersStarWars[params.theid].birth_year : 'Loading'}</h3>
				<h3>{store.charactersStarWars.length != 0 ? "Gender:" + " " + store.charactersStarWars[params.theid].gender : 'Loading'}</h3>
			</div>
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
