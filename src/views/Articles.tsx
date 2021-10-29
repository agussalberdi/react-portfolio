import React from 'react'
import styled from 'styled-components';
import IntersectionObserver from '../components/IntersectionObserver';
import { Section } from '../components/Section';
import Wrapper from '../components/Wrapper';
import { Article } from '../models/article';
import { Routes } from '../models/routes';
import { device } from '../utilities/device';
import article from '../assets/images/article1.png';
import article2 from '../assets/images/article2.png';

const ArticlesSection = styled(Section)`
    background-color: #ffffff;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const ArticleTag = styled.a`
    width: 40%;
    transition: ease-in-out 500ms;
    opacity: 0.7;

    &:hover {
        transform: scale(1.1);
        opacity: 1;
    }

    img {
        width: 100%;
    }

    @media screen and ${device.mobileL} {
        width: 100%;
        margin-top: 20px;
    }
`;

const Title = styled.h1`
    text-align: left;
    color: #191919;
    margin: 0 0 50px 0;
    font-size: 3rem;
`;

export default function Articles() {
    const articles: Article[] = [
        {
            image: article,
            url: "https://www.linkedin.com/pulse/communication-between-components-angular-applications-agustin-1f/"
        },
        {
            image: article2,
            url: "https://www.linkedin.com/pulse/angular-lazy-loading-your-feature-modules-agustin-alberdi-hernandez/"
        }
    ];

    return (
        <div id={Routes.ARTICLES}>
            <IntersectionObserver id={Routes.ARTICLES} hash={Routes.ARTICLES}>
                <ArticlesSection>
                    <Wrapper overflow="visible">
                        <Title>Featured</Title>
                        <Container>
                            {articles.map((article: Article) => <ArticleTag href={article.url} target="_blank"><img src={article.image} /></ArticleTag>)}
                        </Container>
                    </Wrapper>
                </ArticlesSection>
            </IntersectionObserver>
        </div>
    )
}
