import React from 'react'
import { FaAngular, FaReact, FaGit, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import styled from 'styled-components';

import IntersectionObserver from '../components/IntersectionObserver';
import { Section } from '../components/Section';
import Wrapper from '../components/Wrapper';
import { Routes } from '../models/routes';
import { device } from '../utilities/device';

const stack = [FaHtml5, FaCss3, IoLogoJavascript, FaAngular, FaReact, FaGit];

const SkillsSection = styled(Section)`
    background-color: #f4f4f4;
    height: 30vh;
`;

const Title = styled.h2`
`;

const Tools = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    div {
        width: calc(100% / ${stack.length});

        svg {
            font-size: 35px;
        }
        span {
            display: block;
        }

        @media scren and ${device.mobileL} {
            width: calc(100% / ${stack.length * 0.5});
        }
    }
`;

export default function Skills() {
    return (
        <div id={Routes.SKILLS}>
            <IntersectionObserver id={Routes.SKILLS} hash={Routes.SKILLS}>
                <SkillsSection>
                    <Wrapper>
                        <Title>Main Tools and technologies!</Title>
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
                                <IoLogoJavascript color="e8d44d" />
                                <span>JavaScript</span>
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
