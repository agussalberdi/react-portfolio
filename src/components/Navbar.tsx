import React from 'react';
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';
import Logo from '../assets/images/logo.png';
import { NavigationOption } from '../models/navigation-option';
import { device } from '../utilities/device';
import { Routes } from '../models/routes';

const Header = styled.header`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    z-index: 2;
    background-color: #171718;
    transition: all .5s;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 15px;
`;

const LogoImage = styled.img`
    display: block;
    width: 50px;
    height: auto;

    @media screen and ${device.mobileL} {
        display: none;
    }
`;

const NavMenu = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;

    a {
        text-decoration: none;
        color: white;
        transition: all 500ms;
        padding: 10px;
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 2px;
        line-height: 30px;
    
        &:hover {
            letter-spacing: 5px;
        }
    
        &:before, :after {
            border: 1px solid rgba(255, 255, 255, 0);
            bottom: 0px;
            content: " ";
            display: block;
            margin: 0 auto;
            position: relative;
            transition: all 280ms ease-in-out;
            width: 0;
        }
    
        &:hover:before, :hover:after {
            border-color: #fff;
            transition: width 350ms ease-in-out;
            width: 100%;
        }
    }
`;

export default function Navbar(props: any) {
    const navOptions: NavigationOption[] = [
        { name: 'Home', link: 'home'},
        { name: 'About', link: 'about'},
        { name: 'Skills', link: 'skills'},
        { name: 'Articles', link: 'articles'},
        { name: 'Contact', link: 'contact'}
    ];

    return (
        <Header>
            <Container>
                <LogoImage src={Logo} alt="App logo" />
                <NavMenu>
                    {navOptions.map((item, index) => <NavHashLink key={index} to={`/portfolio#${item.link}`}>{item.name}</NavHashLink>)}
                </NavMenu>
            </Container>
        </Header>
    )
}
