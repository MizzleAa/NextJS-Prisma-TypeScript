import React, { useEffect, useState } from 'react'

import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { useTheme } from "next-themes";

import tw from "tailwind-styled-components";
import {
    MdBrightnessLow,
    MdBrightness2,
    MdOutlineLanguage,
    MdMenu
} from "react-icons/md";

import { 
    US, 
    KR 
}  from 'country-flag-icons/string/3x2';

//////////////////////////////////
const MenuButton = tw.button<any>`
    sm:hidden
    text-black dark:text-white 
    flex justify-between items-center
    p-2
    rounded-lg
    hover:bg-zinc-100 dark:hover:bg-zinc-700
`;

const MenuIcon = `
    w-6 h-6
    text-zinc-600 dark:text-zinc-400
`;

const MenuMode:React.FC = () => {
    
    const onClickButton = () => {

    }

    return (
        <MenuButton
            onClick={() => onClickButton()}
        >
            <MdMenu className={MenuIcon}/>
        </MenuButton>
    )
}
//////////////////////////////////
interface Mode {
    check: boolean;
    name: string;
};

const ThemeButton = tw.button<any>`
    xs:hidden 2xs:hidden

    text-black dark:text-white 
    flex justify-between items-center
    p-2
    rounded-lg
    hover:bg-zinc-100 dark:hover:bg-zinc-700
`;

const ThemeIcon = `
    w-6 h-6
    text-zinc-600 dark:text-zinc-400
`;

const ColorMode: React.FC = () => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mode, setMode] = useState<Mode>(
        {
            check: systemTheme === "light" ? false : true,
            name: systemTheme === "light" ? "light" : "dark"
        }
    );

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
        <ThemeButton
            onClick={() => onClickButton(mode.check)}
        >
            {
                mode.check ?
                    <MdBrightnessLow className={ThemeIcon}/>
                    :
                    <MdBrightness2 className={ThemeIcon}/>
            }
        </ThemeButton>
    )
};

//////////////////////////////////
interface LocaleContentProps {
    $visiable: boolean;
};

const LocaleButton = tw.button<any>`
    2xs:hidden xs:hidden 
    
    text-black dark:text-white 
    flex justify-between items-center
    p-2
    rounded-lg
    hover:bg-zinc-100 dark:hover:bg-zinc-700
`;

const LocaleIcon = `
    w-6 h-6
    text-zinc-600 dark:text-zinc-400
`;

const LocaleContentLayout = tw.h1<any & LocaleContentProps>`
    ${(p) => (p.$visiable ? "visiable" : "hidden")}
    fixed top-16
    w-32
    z-10
`;

const LocaleContentUl = tw.ul<any>`
    border dark:border-zinc-800
    bg-white dark:bg-zinc-900
    divide-y
`;

const LocaleConstLiPosition = tw.li<any>`
    flex items-center
    hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white
    px-4 py-2
    space-x-2
`;

const LocaleName = tw.div<any>`
    w-full
    font-thin
    text-xs
    text-zinc-700 dark:text-zinc-200
`;

const LocaleFlagImageSize = tw.img<any>`
    w-5 h-5
`;

const LocaleFlag: React.FC<any> = ({icon}) => {
    const svg = new Blob([icon], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svg);

    return (
        <LocaleFlagImageSize src={url} />
    )
};

const LocaleMode: React.FC = () => {
    const router = useRouter();

    const localeList = [
        {name:"한국어",code:"ko", icon:KR}, 
        {name:"English (US)",code:"en", icon:US}
    ];
    const [isClick, setIsClick] = useState<boolean>(false);

    const onClickLocaleUseButton = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsClick(!isClick);
    };

    const onMouseLeaveContentLayout = () => {
        setIsClick(!isClick);
    };

    const onClickLocaleLink = (e: React.SyntheticEvent, code:string) => {
        router.push(code);
        setIsClick(!isClick);
    };

    return (
        <>
            <LocaleButton
                onClick={onClickLocaleUseButton}
            >
                <MdOutlineLanguage className={LocaleIcon} />
            </LocaleButton>
            {
                isClick &&
                <LocaleContentLayout
                    $visiable={isClick}
                    onMouseLeave={ () => onMouseLeaveContentLayout()}
                >
                    <LocaleContentUl>
                    {
                        localeList.map((localeProp) => (
                            <Link key={localeProp.code} onClick={(e) => onClickLocaleLink(e, localeProp.code)} locale={localeProp.code} href={''}>
                                <LocaleConstLiPosition>
                                    <LocaleFlag icon={localeProp.icon}/>
                                    <LocaleName>{localeProp.name}</LocaleName>
                                </LocaleConstLiPosition>
                            </Link>
                        ))
                    }
                    </LocaleContentUl>
                </LocaleContentLayout>
            }
        </>
    );
};

//////////////////////////////////
const TitleText = tw.h1<any>`
    font-sans    
    text-teal-500
    text-xl font-bold
`;

const TitleLogoSize = `
    w-5 h-5
`;

const TitleLogo:React.FC = () => {
    return (
        <Image className={TitleLogoSize} src="/icon/title.ico" alt="title" width="0" height="0" />
    )
};

//////////////////////////////////
const Position = tw.header<any>`
    absolute inset-x-0 top-0
    w-full h-16
    border-b
    dark:border-zinc-800
    bg-white dark:bg-zinc-900
`;

const Layout = tw.nav<any>`
    flex
    items-center
    justify-between
    
    w-full h-full
    container mx-auto
    xl:px-36
`;

const SideOptionLayout = tw.div<any>`
    flex justify-start items-center
    space-x-2
`;

const TitleOptionLayout = tw.div<any>`
    flex justify-start items-center
    space-x-1
`;

const Header: React.FC = () => {
    return (
        <Position>
            <Layout>
                <TitleOptionLayout>
                    <TitleLogo />
                    <TitleText>Title</TitleText>
                </TitleOptionLayout>
                <SideOptionLayout>
                    <MenuMode /> {/* mobile */}
                    <ColorMode /> 
                    <LocaleMode />
                </SideOptionLayout>
            </Layout>
        </Position>
    )
};

export default Header;