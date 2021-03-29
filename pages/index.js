import React, { useState } from 'react'
import { styled } from '@linaria/react';

const Title = styled.div`
    font-size: ${props => props.size}px;
    color: ${props => props.color};
`

function HomePage() {
    const [size, onSize] = useState(40)

    return (<>
        <Title size={size} color={"black"}>Welcome to Next.js!</Title>
        <Title size={size}>Welcome to Next.js!</Title>
        <Title size={size}>Welcome to Next.js!</Title>
        <Title size={size}>Welcome to Next.js!</Title>
        <input onChange={({ target }) => onSize(target.value)}/>
    </>);
};

export default HomePage;
