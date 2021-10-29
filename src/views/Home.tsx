import React from 'react'
import styled from 'styled-components';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

import Wrapper from '../components/Wrapper';
import IntersectionObserver from '../components/IntersectionObserver';
import { Section } from '../components/Section';
import { Routes } from '../models/routes';
import bg from '../assets/images/bg.jpg';
import Slider from '../components/Slider';
import { Animations } from '../utilities/Animations';
import { device } from '../utilities/device';

const HomeSection = styled(Section)`
    background: url(${bg});
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
    animation: 2s ${Animations.FadeInUp};

    a {
        color: #171718;
        font-size: 2rem;
        margin-right: 20px;

        @media screen and ${device.mobileM} {
            font-size: 1.5rem;
        }
    }
`;

const Title = styled.h2`
    margin: 0;
    margin-top: 20px;
    font-weight: 600;
    letter-spacing: .15em;
    color: #171718;
    animation: 2s ${Animations.FadeInUp};

    @media screen and ${device.mobileM} {
        font-size: 1.5rem;
    }
`;

export default function Home() {
    const title = `I'm Agustin Alberdi`;

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
                            <Title>{title}</Title>
                            <Slider auto={true} arrows={false}></Slider>
                        </MainContainer>
                    </Wrapper>
                </HomeSection>
            </IntersectionObserver>
        </div>
    );
}
