import React from 'react'
import styled from 'styled-components';
import IntersectionObserver from '../components/IntersectionObserver';
import { Section } from '../components/Section';
import Wrapper from '../components/Wrapper';
import { Routes } from '../models/routes';

const AboutSection = styled(Section)`
    background: #1B1B1B;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 300;
    margin: 0;
`;

const Subtitle = styled.h2`
    font-weight: 300;
    letter-spacing: .15em;
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    div.text {
        width: 45%;
    }
`;

export default function About() {
    return (
        <div id={Routes.ABOUT}>
            <IntersectionObserver id={Routes.ABOUT} hash={Routes.ABOUT}>
                <AboutSection>
                    <Wrapper alignment="left">
                        <Title>About me</Title>
                        <Subtitle>Hi there! I'm Agustin Alberdi</Subtitle>
                        <TextWrapper>
                            <div className="text">
                                Self-motivated and proactive Front End Engineer eager to work in a good environment with great challenges ahead. Experienced in large data  ow applications with Angular, RxJs, TypeScript and Angular Material.
                            </div>
                            <div className="text">
                                I am also experienced in other component based frameworks such as React and Vue.
                            </div>
                        </TextWrapper>
                    </Wrapper>
                </AboutSection>
            </IntersectionObserver>
        </div>
    )
}
