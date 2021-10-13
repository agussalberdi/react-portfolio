import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeInDown, zoomIn } from 'react-animations';

const FadeInUp = keyframes`${fadeInUp}`;
const FadeInDown = keyframes`${fadeInDown}`;
const ZoomIn = keyframes`${zoomIn}`;

export const Animations = {
    FadeInUp,
    FadeInDown,
    ZoomIn
};
