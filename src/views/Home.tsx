import React from 'react'
import styled from 'styled-components';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

import Wrapper from '../components/Wrapper';
import IntersectionObserver from '../components/IntersectionObserver';
import { Section } from '../components/Section';
import { Routes } from '../models/routes';
import bg from '../assets/images/bg.jpg';
import Slider from '../components/Slider';

const HomeSection = styled(Section)`
    background: linear-gradient(rgba(0, 0, 0, 0.92), rgba(14, 121, 121, 0.66)), url(${bg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 80vh;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40vh 0;
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: flex-start;

    a {
        color: #d6d6d6;
        font-size: 2rem;
        margin-right: 5px;
    }
`;

const Title = styled.h2`
    margin: 0;
    margin-top: 20px;
    font-family: 'Italianno', cursive;
    font-weight: 300;
    letter-spacing: .15em;
    color: #d6d6d6;
`;

export default function Home() {
    return (
        <div id={Routes.HOME}>
            <IntersectionObserver id={Routes.HOME} hash={Routes.HOME}>
                <HomeSection>
                    <Wrapper>
                        <MainContainer>
                            <SocialContainer>
                                <a href="https://www.linkedin.com/in/agustinalberdi/" target="_blank">
                                    <FaLinkedinIn/>
                                </a>
                                <a href="https://github.com/agussalberdi" target="_blank">
                                    <FaGithub/>
                                </a>
                                <a href="mailto:agustinalberdi1@gmail.com" target="_blank">
                                    <FaEnvelope/>
                                </a>
                                <a href="https://www.instagram.com/agussalberdi/" target="_blank">
                                    <FaInstagram/>
                                </a>
                            </SocialContainer>
                            <Title>I'm Agustin Alberdi</Title>
                            <Slider auto={true} arrows={false}></Slider>
                        </MainContainer>
                    </Wrapper>
                </HomeSection>
            </IntersectionObserver>
        </div>
    );
}
