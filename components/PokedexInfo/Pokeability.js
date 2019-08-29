import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Ability = styled.div`
    width: 90%;
    font-family: 'Arial, Helvetica, sans-serif';
    color: ${({ theme }) => theme.colors.white};
    text-transform: capitalize;
    margin-left: 10%;
    font-size: 0.9em;
    margin-top: -2%;
`

const Habilidadepokemon = styled.div`
width: 90%;
font-family: 'Courier New', Courier, monospace;
text-align: center;
text-transform: uppercase;
font-size: 0.8em;
color: ${({ theme }) => theme.colors.blueescuro};
background-color: ${({ theme }) => theme.colors.blueclaro};
border-radius: 3px;
margin: 5% 0%;
padding: 5%;
p {
    margin-bottom: 2%;
}
`

export default function Pokeability(props) {
    return (
        <Ability>
            <Row>Abilities:</Row>
            <Row>
                <Habilidadepokemon>
                    {props.pokeataque.abilities ? props.pokeataque.abilities.map(abilitie => {
                        return <p>{abilitie.ability.name}</p>
                    }) : <div><p>hability</p>
                            <p>hability</p>
                            <p>hability</p></div>
                    }
                </Habilidadepokemon>
            </Row>
        </Ability>
    )
}
