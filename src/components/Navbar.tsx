import React, { useState } from 'react';
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';
import Logo from '../assets/images/logo.png';
import MenuButton from './MenuButton';
import { NavigationOption } from '../models/navigation-option';
import { device } from '../utilities/device';
import { Animations } from '../utilities/Animations';

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background-color: #171718;
    transition: all .5s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    animation: 2s ${Animations.FadeInDown};

    @media screen and ${device.mobileL} {
        align-items: flex-start;
    }
`;

const LogoImage = styled.img`
    width: 50px;
    height: auto;
`;

interface Props {
    open: boolean;
}

const NavMenu = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    transition: all .5s;

    @media screen and ${device.mobileL} {
        width: 100%;
        height: 100vh;
        flex-direction: column;
        position: fixed;
        left: 0;
        right: 0;
        text-align: center;
        padding-top: 100px;
        opacity: ${(props: Props) => (props.open ? "1" : "0")};
        pointer-events: ${(props: Props) => (props.open ? "auto" : "none")};
        transform: scale(${(props: Props) => (props.open ? "1" : "1.5")});
        background-color: #171718;
    }

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

        @media screen and ${device.mobileL} {
            font-size: 25px;
        }
    }
`;

export default function Navbar(props: any) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    const navOptions: NavigationOption[] = [
        { name: 'Home', link: 'home'},
        { name: 'About', link: 'about'},
        { name: 'Skills', link: 'skills'},
        { name: 'Articles', link: 'articles'},
        { name: 'Contact', link: 'contact'}
    ];

    return (
        <Header>
            <LogoImage src={Logo} alt="App logo" />
            <NavMenu open={open}>
                {navOptions.map((item, index) => <NavHashLink key={index} to={`/portfolio#${item.link}`} onClick={handleClick}>{item.name}</NavHashLink>)}
            </NavMenu>
            <MenuButton open={open} handleClick={handleClick} />
        </Header>
    )
}
