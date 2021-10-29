import React from 'react'
import styled from 'styled-components';
import { FaAngular, FaReact, FaGit, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';

import IntersectionObserver from '../components/IntersectionObserver';
import { Section } from '../components/Section';
import Wrapper from '../components/Wrapper';
import { Routes } from '../models/routes';
import { device } from '../utilities/device';

const stack = [FaHtml5, FaCss3, IoLogoJavascript, SiTypescript, FaAngular, FaReact, FaGit];

const SkillsSection = styled(Section)`
    background-color: #fbfbfd;
`;

const Title = styled.h1`
    font-size: 3rem;
    margin: 0 0 50px 0;

    @media screen and ${device.mobileM} {
        font-size: 2rem;
    }
`;

const Tools = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    div {
        width: calc(100% / ${stack.length});
        margin-top: 25px;
        transition: ease-in-out 600ms;
        cursor: pointer;

        svg {
            font-size: 35px;
        }
        span {
            display: block;
            font-weight: 600;
            letter-spacing: 1.5px;
        }

        &:hover {
            transform: scale(1.2);
        }

        @media screen and ${device.laptop} {
            width: 25%;
        }

        @media screen and ${device.mobileL} {
            width: 33%;
        }

        @media screen and ${device.mobileM} {
            width: 50%;
        }
    }
`;

export default function Skills() {
    return (
        <div id={Routes.SKILLS}>
            <IntersectionObserver id={Routes.SKILLS} hash={Routes.SKILLS}>
                <SkillsSection>
                    <Wrapper overflow="visible">
                        <Title>Skills</Title>
                        <Tools>
                            <div>
                                <FaHtml5 color="#d1382b" />
                                <span>HTML5</span>
                            </div>
                            <div>
                                <FaCss3 color="#0160ac" />
                                <span>CSS3</span>
                            </div>
                            <div>
                                <IoLogoJavascript color="#e8d44d" />
                                <span>JavaScript</span>
                            </div>
                            <div>
                                <SiTypescript color="#2f73bf" />
                                <span>TypeScript</span>
                            </div>
                            <div>
                                <FaAngular color="#d1382b" />
                                <span>Angular</span>
                            </div>
                            <div>
                                <FaReact color="#60dbfb" />
                                <span>React</span>
                            </div>
                            <div>
                                <FaGit color="#f05033" />
                                <span>Git</span>
                            </div>
                        </Tools>
                    </Wrapper>
                </SkillsSection>
            </IntersectionObserver>
        </div>
    )
}
