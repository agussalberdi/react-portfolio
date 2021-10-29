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
    margin-bottom: 25px;
    padding-bottom: 5px;
    border-bottom: 3px solid #fd5e53;
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    div.text {
        width: 48%;
        letter-spacing: 1.5px;
        line-height: 2;

        @media screen and ${device.tablet} {
            width: 100%;
        }
    }
`;

const BulletContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-top: 30px;
`;

const Bullet = styled.div`
    color: #fd5e53;
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
        text-align: left;
        font-size: 14px;
        line-height: 2;
    }

    @media screen and ${device.laptop} {
        span {
            font-size: 24px;
        }
    }
`;

export default function About() {
    return (
        <div id={Routes.ABOUT}>
            <IntersectionObserver id={Routes.ABOUT} hash={Routes.ABOUT}>
                <AboutSection>
                    <Wrapper alignment="left">
                        <Title>About me</Title>
                        <TextWrapper>
                            <div className="text">
                                Self-motivated and proactive Front End Engineer experienced in large data-flow applications with Angular, RxJs, TypeScript and Angular Material.
                            </div>
                            <div className="text">
                                I am also qualified in other component based frameworks such as React and Vue. I love creating innovative applications prioritizing best practices to make the user journey a pleasant one.
                            </div>
                        </TextWrapper>
                        <BulletContainer>
                            <Bullet>
                                <FaRegClock></FaRegClock>
                                <span>Fast</span>
                                <p>Fast load times and lag free interaction by implementing lazy-loading strategy.</p>
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
