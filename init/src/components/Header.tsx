import React from 'react'

import { useTheme } from "next-themes";

import tw from "tailwind-styled-components";
//interface

interface TitleProps {
    $large: boolean;
}

//type

//style
const Title = tw.h1<TitleProps>`
    ${(p) => (p.$large ? "text-2xl" : "text-base")}
    text-teal-500
    font-bold
`

// const SpecialBlueContainer = styled.section`
//     background-color: #fff;
// `

const Layout = tw.header<any>`
    flex
    items-center
    justify-start
    w-full
    border-b
    p-4
`
//react
const ColorMode:React.FC = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    
    return (
        <>
            <button className="w-10 h-10" role="button" onClick={() => setTheme('light')} >light</button>
            <button className="w-10 h-10" role="button" onClick={() => setTheme('dark')} >dark</button>
        </>
    )
}

const Header: React.FC = () => {
    
    return (
        <Layout>
            <Title $large={true}>Title</Title>
            <ColorMode />
        </Layout>
    )
}

export default Header;