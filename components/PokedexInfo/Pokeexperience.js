import React from 'react'
import styled from 'styled-components';
import { Row, Col} from 'antd';

const Pokeexp =styled.div `
width: 100%;
height: auto;
margin-top: 1%;
`
const Experience =styled.h5`
height: auto;
font-family: 'Arial, Helvetica, sans-serif';
font-size: 0.9em;
color: ${({theme}) => theme.colors.white};
margin: 1% 0%;
margin-left: 10%;
`

const Number =styled.h6`
height: auto;
font-family: 'Courier New', Courier, monospace;
font-size: 0.9em;
text-align: center;
color: ${({ theme }) => theme.colors.blueescuro};
margin-bottom: 0;
background-color: ${({theme}) => theme.colors.white};
margin-right: 20%;
border-radius: 3px;
`

export default function Pokeexperience(props) {
    return (
        <Pokeexp>
            <Col span={18}>
            <Experience>Base experience:</Experience>
            </Col>
            <Col span={6}>
            <Number>{props.pokemonexperience.base_experience ? props.pokemonexperience.base_experience : "000"}</Number>
            </Col>
        </Pokeexp>
    )
}
