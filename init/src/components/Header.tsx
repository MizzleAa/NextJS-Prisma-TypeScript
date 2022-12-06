import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

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
            {mode.check ? <>light</> : <>dark</>}
        </button>
    )
}

const LocaleMode: React.FC = () => {
    const selectList = ["ko", "en"];
    const router = useRouter();

    const [selected , setSelected] = useState<string>("");

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const locale = e.target.value;
        setSelected(locale);
        router.replace(locale);
    }

    return (
        <select 
            className='border-gray-100 rounded border-transparent focus:border-transparent focus:ring-1 focus:ring-gray-300'
            onChange={onChangeSelect}
            value={selected}
        >
            {selectList.map((item) => (
                <option value={item} key={item}>
                    {item}
                </option>
          ))}
        </select>
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