import React from 'react'
import styled from 'styled-components';

interface Props {
    alignment: string;
}
  
const WrapperElement = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0 auto;
    max-width: 1230px;
    width: 90%;
    text-align: ${(props: Props) => props.alignment || 'center'};
`;

export default function Wrapper(props: any) {
    return (
        <WrapperElement alignment={props.alignment}>
            {props.children}
        </WrapperElement>
    )
}
