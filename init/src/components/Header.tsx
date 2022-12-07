import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

import { useTranslation } from 'next-i18next'

import { useTheme } from "next-themes";

import tw from "tailwind-styled-components";

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

const SideOptionLayout = tw.div<any>`
    flex
    space-x-2
`

interface Mode {
    check: boolean;
    name: string;
}
//react
const ColorMode: React.FC = () => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mode, setMode] = useState<Mode>({
        check: true,
        name: "dark"
    });

    const onClickButton = (check: boolean) => {
        const name = check ? "dark" : "light";
        const data: Mode = {
            check: !check,
            name: name
        }
        setMode(data);
        setTheme(name);
    }

    return (
        <button
            className='px-4 py-2 font-bold text-black dark:text-white bg-gray-100 dark:bg-gray-800 rounded'
            onClick={() => onClickButton(mode.check)}
        >
            {mode.check ? <>light</> : <>dark</>}
        </button>
    )
}

const LocaleMode: React.FC = () => {
    const selectList = ["ko", "en"];
    const router = useRouter();

    return (
        <>
            <button
                className="text-black bg-gray-300 flex justify-between items-center p-2 rounded"
            >
                <div>Language</div>
                <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    {
                        selectList.map((data)=>(
                            <li>
                                <Link href={`/${data}`} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{data}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

const Header: React.FC = () => {
    const { t } = useTranslation('index');

    return (
        <Layout>
            <Title>{t('title')}</Title>
            <SideOptionLayout>
                <ColorMode />
                <LocaleMode />
            </SideOptionLayout>
        </Layout>
    )
};

export default Header;