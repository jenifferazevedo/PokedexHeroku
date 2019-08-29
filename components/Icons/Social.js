import React from 'react';
import styled from 'styled-components';
import { Row, Col, Icon, Button } from 'antd';

const Iconbutton = styled.div`
    padding-bottom: 13px;
    .ant-btn{
        width: 40px;
        height: 40px;
        margin: 0% 2.5%;
        padding: 6px;
        border-radius: 100%;
        :hover {
        box-shadow: 0px 0px 5px 2px ${({ theme }) => theme.colors.blueescuro};
        };
        .anticon{
        padding: 0;
        margin: 0;
        text-align: center;
        font-size: 1.8em;
        fill: ${({ theme }) => theme.colors.cinzaescuro};
        };
        @keyframes animatedgradient {
	    0% {
		    background-position: 0% 50%;
	    }
	    50% {
		    background-position: 100% 50%;
	    }
	    100% {
		    background-position: 0% 50%;
	    }
        }
    }
`

export default function Social() {
    return (
        <div>
            <Iconbutton>
                <Button href='https://www.linkedin.com/in/jeniffer-de-azevedo-6b567070/' target="_blank"><Icon type="linkedin" /></Button>
                <Button href='https://github.com/jenifferazevedo' target="_blank"><Icon type="github" /></Button>
                <Button href='https://www.behance.net/jenifferazevedo' target="_blank"><Icon type="behance-square" /></Button>
            </Iconbutton>
        </div>
    )
}
