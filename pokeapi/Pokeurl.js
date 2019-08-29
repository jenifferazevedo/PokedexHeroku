import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';

//IMPORT AXIOS
import axios from 'axios';

//URL BASE
const API_URL = 'https://pokeapi.co/api/v2/';

// DINAMIC ENDPOINT
const pokemons = `${API_URL}pokemon/`;

export default function teste() {
    //USER STATE
    const [state, setState] = useState({});

    //USE EFFECT
    useEffect(() => {
        axios
        .get(pokemons)
        .then(response => response.data)
        .then(data => {
            setState(data.results);
        });
    }, [])

    console.log(state);
    
    // GET DATA
    //axios.get(pokemons).then(response => response.data)
    //    .then(data => {
    //        console.log(data.results);
    //    });

    return (
        <div>
            {state.length > 0 && state.map(pokemon => {
                return <div>{pokemon.name}</div>
            })}
        </div>
    )
}
