import React from 'react'
import styled from 'styled-components';
import { Row, Col, Icon } from 'antd';

const Basement = styled.div`
    background: ${({ theme }) => theme.colors.blue1};
    box-shadow: 2px 2px 4px  ${({ theme }) => theme.colors.boxshadowescuro};
    padding-left: 2.5%;
    h1{
    color: ${({ theme }) => theme.colors.cinzaescuro};
    }
    svg {
    width: 10px;
    height: auto;
    fill: ${({ theme }) => theme.colors.blueclaro};
    }
`

export default function Menu(props) {
    return (
        <Basement>
            <h1>{props.title}</h1>
            
        </Basement>
    )
}
