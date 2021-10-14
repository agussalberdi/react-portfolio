import React from 'react'
import styled from 'styled-components';
import { FaRegClock, FaMobileAlt, FaRocket, FaRecycle } from 'react-icons/fa';
import IntersectionObserver from '../components/IntersectionObserver';
import { Section } from '../components/Section';
import Wrapper from '../components/Wrapper';
import { Routes } from '../models/routes';
import { device } from '../utilities/device';

const AboutSection = styled(Section)`
    background: #1B1B1B;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
`;

const Title = styled.h1`
    width: 220px;
    font-size: 40px;
    font-weight: 300;
    margin: 0;
    border-bottom: 3px solid #01563e;
    padding-bottom: 5px;
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
        width: 48%;
        letter-spacing: 1.5px;

        @media screen and ${device.tablet} {
            width: 100%;
        }
    }
`;

const BulletContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 30px;
`;

const Bullet = styled.div`
    width: 25%;
    color: #bbe346;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        font-size: 40px;
        margin-bottom: 15px;
    }

    span {
        font-size: 30px;
        font-weight: 700;
    }

    p {
        color: white;
        letter-spacing: 1.5px;
        font-size: 14px;
    }

    @media screen and ${device.laptop} {
        width: 33%;
        margin-top: 15px;

        span {
            font-size: 24px;
        }
    }

    @media screen and ${device.tablet} {
        width: 50%;
    }

    @media screen and ${device.mobileM} {
        width: 100%;
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
                                Self-motivated and proactive Front End Engineer eager to work in a good environment with great challenges ahead. Experienced in large data-flow applications with Angular, RxJs, TypeScript and Angular Material.
                            </div>
                            <div className="text">
                                I am also experienced in other component based frameworks such as React and Vue.
                            </div>
                        </TextWrapper>
                        <BulletContainer>
                            <Bullet>
                                <FaRegClock></FaRegClock>
                                <span>Fast</span>
                                <p>Fast load times and lag free interaction.</p>
                            </Bullet>
                            <Bullet>
                                <FaMobileAlt></FaMobileAlt>
                                <span>Responsive</span>
                                <p>My layouts will work on any device, big or small.</p>
                            </Bullet>
                            <Bullet>
                                <FaRocket></FaRocket>
                                <span>Dynamic</span>
                                <p>Websites don't have to be static, I love making pages come to life.</p>
                            </Bullet>
                            <Bullet>
                                <FaRecycle></FaRecycle>
                                <span>Reusable</span>
                                <p>I love to make reusable components that can be shared throughout the app.</p>
                            </Bullet>
                        </BulletContainer>
                    </Wrapper>
                </AboutSection>
            </IntersectionObserver>
        </div>
    )
}
