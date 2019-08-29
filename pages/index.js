import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Menu from '../components/Menu';
import Pokedex from '../components/Pokedex';
import Social from '../components/Icons/Social';

const Backgroundsite = styled.div`
width: 100%;
background: ${({ theme }) => theme.colors.background1} no-repeat fixed;
@media (max-width: 568px) {
    height: 800px;
}
`
const Footer = styled.div`
background: ${({ theme }) => theme.colors.blue};
width: 100%;
text-align: center;
margin-bottom: 2%;
`

export default function index(props) {

    return (
        <Backgroundsite>
            <Row>
                <Menu title="Pokedex Jeniffer's Project" />
            </Row>
            <Row type="flex" justify="center">
                <Col lg={7} md={10} sm={13} xs={24}>
                    <Pokedex />
                </Col>
            </Row>
            <Row>
                <Footer>
                    <Social />
                </Footer>
            </Row>
        </Backgroundsite>

    )
}
