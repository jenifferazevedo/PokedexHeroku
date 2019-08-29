import React from 'react';
import styled from 'styled-components';

const Pokenome = styled.div`
    height: auto;
    width: 90%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2em;
    font-family: 'Arial, Helvetica, sans-serif';
    text-transform: capitalize;
    text-decoration: underline;
    margin-left: 10%;
    margin-top: 2%;
`

export default function Pokename(props) {
    return (
        <Pokenome>{props.pokemonname.name ? props.pokemonname.name : "Pokemon"}</Pokenome>
    )
}
