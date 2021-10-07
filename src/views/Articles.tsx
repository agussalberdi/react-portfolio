import React from 'react'
import styled from 'styled-components';
import { Section } from '../components/Section';
import Wrapper from '../components/Wrapper';
import { Article } from '../models/article';
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
    width: 45%;

    img {
        width: 100%;
    }
`;

const Title = styled.h2`
    text-align: left;
    color: #191919;
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
        <ArticlesSection>
            <Wrapper>
                <Title>Featured</Title>
                <Container>
                    {articles.map((article: Article) => <ArticleTag href={article.url} target="_blank"><img src={article.image} /></ArticleTag>)}
                </Container>
            </Wrapper>
        </ArticlesSection>
    )
}
