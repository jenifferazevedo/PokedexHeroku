import React, { useState, useEffect } from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';


const Bolablue = styled.button`
    width: 35%;
    height: 20vh;
    padding: 3%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.blueclaro};
    border-radius: 100%;
    border-style: none;
    box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.blueclaromedio};
    opacity: ${props => props.open ? '0' : '1'};
    display: ${props => props.open ? 'none' : 'block'};
    transition: display ${props => props.open ? '1s' : '3s'} , opacity ${props => props.open ? '1s' : '3s'};
    :focus {
        box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.blueescuro};
    };
    :hover {
        box-shadow: 0px 0px 20px 5px ${({ theme }) => theme.colors.blueescuro}
    }
`
const Bolablue1 = styled.div`
    height: 100%;
    width: 100%;
    box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.blueclaromedio};
    border-style: none;
    border-radius: 100%;
    position: relative;
    p{
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.blueescuro};
    }
`

const ButtonOff = styled.button`
width: 7%;
height: 5%;
background-color: ${({ theme }) => theme.colors.white};
top: 72.5%;
margin-left: 44.5%;
padding: 0;
position: absolute;
z-index: ${props => props.open ? '7' : '0'};
transition: z-index ${props => props.open ? '4s' : '0s'};
box-shadow: 1px 1px ${({ theme }) => theme.colors.boxshadowmedio};
border-radius: 50%;
border: 2px solid  ${({ theme }) => theme.colors.red1};
:focus {
    border-radius: 50%;
}
:hover {
    box-shadow: 0px 0px 3px 1.5px ${({ theme }) => theme.colors.boxshadowescuro};
    border: 2px solid  ${({ theme }) => theme.colors.blueescuro};
}
.anticon svg {
    text-align: center;
    fill: ${({ theme }) => theme.colors.red1};
    :hover {
        fill:  ${({ theme }) => theme.colors.blueescuro};
    }
}
`
export function Pokebutton(props) {

    return (

        <Bolablue open={props.opening}>
            <Bolablue1>
                <p>POKEDEX START</p>
            </Bolablue1>
        </Bolablue>

    )
}

export function Pokebuttonoff(props) {

    return (
        <ButtonOff open={props.opening}><Icon type="poweroff" /></ButtonOff>
    )
}