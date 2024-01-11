import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Animations } from '../utilities/Animations';
import { device } from '../utilities/device';

const SliderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 292px;
    margin-top: 20px;
    transition: 1s;
    animation: 2s ${Animations.FadeInUp};
`;

const Slide = styled.div`
    width: inherit;
    border-radius: 3px;
    padding: 10px;
    background-color: #00000057;
    color: #fff;
    font-weight: 700;
    transition: ease-out 500ms;

    @media screen and ${device.mobileL} {
        width: 150px;
        font-size: 12px;
    }
`;

const Arrow = styled.div`
    color: #ffffff;
    font-weight: 700;
    font-size: 22px;
`;

const slides = ['Front End Engineer', 'Web Developer', 'JavaScript'];

interface Props {
    auto: boolean;
    arrows: boolean;
}

export default function Slider(props: Props) {
    const [index, setIndex] = useState(0);
    const [slide, setSlide] = useState(slides[0]);

    useEffect(() => {
        if (props.auto || !props.arrows) {
            const interval = setInterval(() => {
                next();
            }, 1000);
            return () => clearInterval(interval);
        }
    });

    const prev = () => {
        const condition = index <= 0;
        const prevIndex = condition ? slides.length - 1 : index - 1;
        const prevSlide = slides[prevIndex];
        setSlide(prevSlide);
        setIndex(prevIndex);
    }

    const next = () => {
        const condition = index >= slides.length - 1;
        const nextIndex = condition ? 0 : index + 1;
        const nextSlide = slides[nextIndex];
        setSlide(nextSlide);
        setIndex(nextIndex);
    }

    return (
        <SliderWrapper>
            {props.arrows ? <Arrow onClick={prev}>{`<`}</Arrow> : <></>}
            <Slide>{slide}</Slide>
            {props.arrows ? <Arrow onClick={next}>{`>`}</Arrow> : <></>}
        </SliderWrapper>
    )
}
