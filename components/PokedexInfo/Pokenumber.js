import React from 'react'
import styled from 'styled-components';

const Number =styled.h6`
width: 30%;
height: auto;
font-family: 'Courier New', Courier, monospace;
font-size: 1em;
color: ${({ theme }) => theme.colors.white};
margin-top: -1%;
margin-left: 60%;
margin-bottom: 0;
`

export default function Pokenumber(props) {
    return (
        <Number><span>ID:</span>{props.pokemonnumber.id ? props.pokemonnumber.id : "000"}</Number>
    )
}
