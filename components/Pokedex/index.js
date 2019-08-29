import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col, Icon } from 'antd';
import Up from './Up';
import Down from './Down';
import { Pokebutton, Pokebuttonoff } from './PokeButton';
import Pokedexinfo from '../PokedexInfo';

const Basement = styled.div`
width: 100%;
margin-left: 2.5%;
margin-bottom: 20%;
position: relative;
z-index:1;
float: left;
`

const Pokebase = styled.div`
 height: ${props => props.open ? '35vh' : '9vh'};
 transition: height ${props => props.open ? '0.8s' : '0s'};
 width: 92%;
 margin-left: 1.5%;
 background-color: ${({ theme }) => theme.colors.blueclaro};
 position: relative;
 @media (max-width: 568px) {
    height: ${props => props.open ? '250px' : '50px'};
}
`

export default function index(props) {
    const [state, setState] = useState(false);
    const [resetStates, setResetStates] = useState(false)

    function resetStateFunction(reset) {
        setResetStates();
        console.log(setResetStates)
    }

    //const [state, setState] = useState(false);
    //    <Row>
    //        <Col span={24}>
    //            <Poke open={state}>
    //                <Up opening={state} />
    //                <div onClick={() => setState(!state)}>
    //                    <Pokebutton opening={state} />
    //                </div>
    //                <Down opening={state} />
    //                <div onClick={ () => setState(!state && (""))}> 
    //                    <ButtonOff open={state}><Icon type="poweroff" /></ButtonOff>
    //                </div>
    //            </Poke>
    //        </Col>
    //    </Row>
    // <Pokebutton opening={state} />
    return (
        <Basement open={state}>
            <Up opening={state} />
            <Pokebase open={state}>
                <div onClick={() => setState(!state)}>
                    <Pokebutton opening={state} />
                </div>
                <Pokedexinfo opening={state} resetStates={resetStateFunction} />
            </Pokebase>
            <Down />
            <div onClick={() => resetStateFunction(setState(!state))}>
                <Pokebuttonoff opening={state} />
            </div>
        </ Basement>
    )
}

//<div onClick={() => setState((""))}>
//<Pokebuttonoff opening={state} />
//</div>