import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/MoreInfo.css"

export const DetailsVehicles = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div className="jumbotron">

            <h1>{store.vehiclesStarWars.length != 0 ? store.vehiclesStarWars[params.theid].name : 'Loading'}</h1>
            <div className="Extra-info">
                <h3>{store.vehiclesStarWars.length != 0 ? "Height:" + " " + store.vehiclesStarWars[params.theid].model : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Mass:" + " " + store.vehiclesStarWars[params.theid].manufacturer : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Hair Color:" + " " + store.vehiclesStarWars[params.theid].cost_in_credits : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Skin Color:" + " " + store.vehiclesStarWars[params.theid].max_atmosphering_speed : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Eye Color:" + " " + store.vehiclesStarWars[params.theid].crew : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Birth Year:" + " " + store.vehiclesStarWars[params.theid].passengers : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Gender:" + " " + store.vehiclesStarWars[params.theid].cargo_capacity : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Gender:" + " " + store.vehiclesStarWars[params.theid].consumables : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Gender:" + " " + store.vehiclesStarWars[params.theid].vehicle_class : 'Loading'}</h3>
            </div>
            {console.log(params)}
            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

DetailsVehicles.propTypes = {
    match: PropTypes.object
};