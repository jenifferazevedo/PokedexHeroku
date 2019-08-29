import React from 'react';
import styled from 'styled-components';

const Pokemontype = styled.div`
    width: 60%;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blueescuro};
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8em;
    text-align: center;
    text-transform: uppercase;
    border-radius: 3px;
    margin-left: 20%;
    padding: 1% 1%;
`

export default function Poketype(props) {
    return (
        <Pokemontype>
            {props.pokemonselectedtype.types ? props.pokemonselectedtype.types["0"].type.name : "Type"}
        </Pokemontype>
    )
}
