import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import Wrapper from './Wrapper';
import { device } from '../utilities/device';

const FooterElement = styled.footer`
    padding: 20px 0;
    background-color: black;
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: #d6d6d6;
        font-size: 1.5rem;
        margin-right: 20px;
    }
`;

const Paragraph = styled.p`
display: inline-block;
    color: #d6d6d6;
    margin: 0;
    letter-spacing: 2.5px;

    @media screen and ${device.mobileM} {
        font-size: 14px;
    }
`;

export default function Footer() {
    return (
        <FooterElement>
            <Wrapper>
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
                <Paragraph>© 2021 Agustin Alberdi.</Paragraph>
            </Wrapper>
        </FooterElement>
    )
}
