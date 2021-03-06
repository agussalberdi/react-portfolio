import React from 'react'
import styled from 'styled-components';
import { Section } from '../components/Section';
import Wrapper from '../components/Wrapper';
import IntersectionObserver from '../components/IntersectionObserver';
import { Project } from '../models/project';
import { Routes } from '../models/routes';
import { device } from '../utilities/device';
import project1 from '../assets/images/Projects/project1.png';
import project2 from '../assets/images/Projects/project2.png';
import project3 from '../assets/images/Projects/project3.png';
import project4 from '../assets/images/Projects/project4.png';

const ProjectsSection = styled(Section)`
    background: black;
    color: white;
`;

const Title = styled.h1`
    font-size: 3rem;

    @media screen and ${device.mobileM} {
        font-size: 2rem;
    }
`;

const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
`;

const ProjectCard = styled.div`
    background-color: white;
    border-radius: 10px;
    color: black;
    transition: ease-out 500ms;
    transform: scale(1);

    &:hover {
        transform: scale(1.05);
    }
`;

const ProjectCardContent = styled.div`
    padding: 1rem;
    box-sizing: border-box;
`;

const ProjectCardImage = styled.img`
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const Paragraph = styled.p`
    font-weight: 600;
    text-align: justify;
    line-height: 2;

    span {
        color: #3bad7f;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: white;
        background-color: black;
        font-weight: bold;
        margin: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        transition: ease-in 500ms;
        border: 2px solid black;

        &:hover {
            color: black;
            background-color: white;
        }
    }
`;

export default function Projects() {
    const projects: Project[] = [
        {
            name: 'Rick & Morty App',
            description: 'Rick and Morty app that shows all characters, episodes and locations of this TV show.',
            technologies: 'Angular + TypeScript + RxJs + Firebase + SCSS + Angular Material',
            links: {
                url: 'https://rick-morty-angular.netlify.app/',
                repo: 'https://github.com/agussalberdi/angular-rick-morty',
            },
            image: `${project1}`
        },
        {
            name: 'LANDA',
            description: 'Landing page for Law Studio called Landa.',
            technologies: 'HTML + CSS + JavaScript + Jquery',
            links: {
                url: 'https://landing-landa.netlify.app',
                repo: 'https://github.com/agussalberdi/Landa'
            },
            image: `${project2}`
        },
        {
            name: 'SEGUMAX',
            description: 'Landing page for an Insurance company called Segumax.',
            technologies: 'HTML + CSS + JavaScript + Jquery',
            links: {
                url: 'https://home-seguros.netlify.app',
                repo: 'https://github.com/agussalberdi/home-seguros'
            },
            image: `${project3}`
        },
        {
            name: 'WHG Test',
            description: 'Front End test realized for WHG. It allows you to search casino games by category and jackpots.',
            technologies: 'Angular + TypeScript + RxJs + SCSS',
            links: {
                url: 'https://whitehat-gaming-test.netlify.app/',
                repo: 'https://github.com/agussalberdi/whitehat-gaming-frontend-test'
            },
            image: `${project4}`
        },
    ];

    return (
        <div id={Routes.PROJECTS}>
            <IntersectionObserver id={Routes.PROJECTS} hash={Routes.PROJECTS}>
                <ProjectsSection>
                    <Wrapper overflow="visible">
                        <Title>Projects</Title>
                        <ProjectsContainer>
                            {projects.map((project: Project) => (
                                <ProjectCard>
                                    <ProjectCardImage src={project.image} />
                                    <ProjectCardContent>
                                        <h3>{project.name}</h3>
                                        <Paragraph>{project.description}</Paragraph>
                                        <Paragraph><span>Stack: </span>{project.technologies}</Paragraph>
                                        <Buttons>
                                            <a href={project.links.url} target="_blank">Project</a>
                                            <a href={project.links.repo} target="_blank">Repository</a>
                                        </Buttons>
                                    </ProjectCardContent>
                                </ProjectCard>
                            ))}
                        </ProjectsContainer>
                    </Wrapper>
                </ProjectsSection>
            </IntersectionObserver>
        </div>
    )
}
