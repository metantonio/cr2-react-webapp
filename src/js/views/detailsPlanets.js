import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/MoreInfo.css"

export const DetailsPlanets = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div className="jumbotron">

            <h1>{store.planetsStarWars.length != 0 ? store.planetsStarWars[params.theid].name : 'Loading'}</h1>
            <div className="Extra-info">
                <h3>{store.planetsStarWars.length != 0 ? "Rotation Period:" + " " + store.planetsStarWars[params.theid].rotation_period : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Orbital Period:" + " " + store.planetsStarWars[params.theid].orbital_period : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Diameter:" + " " + store.planetsStarWars[params.theid].diameter : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Climate:" + " " + store.planetsStarWars[params.theid].climate : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Gravity:" + " " + store.planetsStarWars[params.theid].gravity : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Terrain:" + " " + store.planetsStarWars[params.theid].terrain : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Surface Water:" + " " + store.planetsStarWars[params.theid].surface_water : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Population:" + " " + store.planetsStarWars[params.theid].population : 'Loading'}</h3>
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

DetailsPlanets.propTypes = {
    match: PropTypes.object
};