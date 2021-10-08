import React, { useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Routes } from '../models/routes';
import '../assets/fonts/Italianno/Italianno-Regular.ttf';
import { device } from '../utilities/device';

const StartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #171718;
    font-family: 'Italianno', cursive;
    color: white;
    padding: 20px;
    box-sizing: border-box;
`;

const Title = styled.h2`
    font-size: 40px;
    text-align: center;

    @media screen and ${device.mobileL} {
        font-size: 30px;
    }
`;

const Enter = styled.button`
    width: 100px;
    background: white;
    border: 0px solid black;
    padding: 10px;
    color: #42c191;
    border-radius: 10px;
    font-size: 30px;
    cursor: pointer;
    box-shadow: 0px 0px 12px 7px #42c191;
    transition: all .6s;

    @keyframes shake {
        10%, 90% {
          transform: translate3d(-1px, 0, 0);
        }
        20%, 80% {
          transform: translate3d(2px, 0, 0);
        }
        30%, 50%, 70% {
          transform: translate3d(-4px, 0, 0);
        }
        40%, 60% {
          transform: translate3d(4px, 0, 0);
        }
    }

    &:hover {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        perspective: 1000px;
    }
`;

export default function Start() {
    const [navigate, setNavigate] = useState(false);
    const history = useHistory();

    return (
        <StartContainer>
            <Title>Welcome to my portfolio</Title>
            <Enter
                onClick={() => {
                setNavigate(true);
                setTimeout(() => {
                    history.push(`/portfolio#${Routes.HOME}`);
                }, 1000);
                }}
            >
                Enter
            </Enter>
        </StartContainer>
    )
}
