import React, { useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import '../assets/fonts/Italianno/Italianno-Regular.ttf';
import { Routes } from '../models/routes';

const StartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #171718;
    font-family: 'Italianno', cursive;
`;

const Enter = styled.button``;

export default function Start() {
    const [navigate, setNavigate] = useState(false);
    const history = useHistory();

    return (
        <StartContainer>
            <p>Welcome to my portfolio</p>
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
