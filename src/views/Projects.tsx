import React from 'react'
import styled from 'styled-components';
import { Section } from '../components/Section';
import Wrapper from '../components/Wrapper';
import { Project } from '../models/project';
import project1 from '../assets/images/Projects/project1.png';
import project2 from '../assets/images/Projects/project2.png';
import project3 from '../assets/images/Projects/project3.png';
import project4 from '../assets/images/Projects/project4.png';
import { Routes } from '../models/routes';
import IntersectionObserver from '../components/IntersectionObserver';

const ProjectsSection = styled(Section)`
    background: black;
    color: white;
`;

const Title = styled.h1`
    font-size: 3rem
`;

const ProjectsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;

const ProjectCard = styled.div`
    width: 20rem;
    background-color: #1e1e1e;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    box-shadow: 0px 9px 32px -1px #fd5e53;
    margin: auto;
    margin-top: 5rem;
    opacity: 0.5;
    transition: ease-out 500ms;
    transform: scale(1);

    &:hover {
        opacity: 1;
        transform: scale(1.1);
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
        background-color: #fd5e53;
        font-weight: bold;
        margin: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        transition: ease-in 500ms;

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
                                            <a href={project.links.url}>Project</a>
                                            <a href={project.links.repo}>Repository</a>
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
