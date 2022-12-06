import React, { useEffect, useState } from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { useTheme } from "next-themes";

import tw from "tailwind-styled-components";
import { GetStaticProps } from 'next';

//type

//style
// interface TitleProps {
//     $large: boolean;
// }

// const Title = tw.h1<TitleProps>`
//     ${(p) => (p.$large ? "text-2xl" : "text-base")}
//     text-teal-500
//     font-bold
// `

// const SpecialBlueContainer = styled.section`
//     background-color: #fff;
// `


const Title = tw.h1<any>`
    text-teal-500
    font-bold
`

const Layout = tw.header<any>`
    flex
    items-center
    justify-between
    w-full
    border-b
    p-4
`

interface Mode {
    check:boolean;
    name:string;
}
//react
const ColorMode: React.FC = () => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [ mode, setMode] = useState<Mode>({
        check:true, 
        name:"dark"
    });

    const onClickButton = (check:boolean) => {
        const name = check ? "dark" : "light";
        const data:Mode = {
            check:!check,
            name:name
        }
        setMode(data);
        setTheme(name);
    }

    return (
        <button
            className='px-4 py-2 font-bold text-black dark:text-white bg-gray-100 dark:bg-gray-800 rounded'
            onClick={() => onClickButton(mode.check)}
        >
            {mode.check ? <label>light</label> : <label>dark</label>}
        </button>
    )
}

const Header: React.FC = () => {
    const { t } = useTranslation('index');

    return (
        <Layout>
            <Title>{t('title')}</Title>
            <ColorMode></ColorMode>
        </Layout>
    )
};

export default Header;