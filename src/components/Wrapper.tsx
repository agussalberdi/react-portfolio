import React from 'react'
import styled from 'styled-components';

interface Props {
    alignment: string;
    overflow: string;
}
  
const WrapperElement = styled.div`
    position: relative;
    display: block;
    overflow: ${(props: Props) => props.overflow || 'hidden'};
    margin: 0 auto;
    max-width: 1230px;
    width: 90%;
    text-align: ${(props: Props) => props.alignment || 'center'};
`;

export default function Wrapper(props: any) {
    return (
        <WrapperElement alignment={props.alignment} overflow={props.overflow}>
            {props.children}
        </WrapperElement>
    )
}
