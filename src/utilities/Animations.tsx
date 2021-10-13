import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeInDown, fadeInLeft, fadeInRight } from 'react-animations';

const FadeInUp = keyframes`${fadeInUp}`;
const FadeInDown = keyframes`${fadeInDown}`;
const FadeInLeft = keyframes`${fadeInLeft}`;
const FadeInRight = keyframes`${fadeInRight}`;

export const Animations = {
    FadeInUp,
    FadeInDown,
    FadeInLeft,
    FadeInRight
};
