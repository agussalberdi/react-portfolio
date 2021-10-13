import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Animations } from '../utilities/Animations';

const SliderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 230px;
    margin-top: 20px;
    transition: 1s;
    animation: 2s ${Animations.FadeInUp};
`;

const Slide = styled.div`
    width: 180px;
    border: 2px solid #ffffff;
    border-radius: 5px;
    padding: 5px;
    color: #ffffff;
    font-weight: 700;
    transition: 1s;
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
        const prevSlide = condition ? slides[slides.length - 1] : slides[index - 1];
        setSlide(prevSlide);
        setIndex(prevIndex);
    }

    const next = () => {
        const condition = index >= slides.length - 1;
        const nextSlide = condition ? slides[0] : slides[index + 1];
        const nextIndex = condition ? 0 : index + 1;
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
