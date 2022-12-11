import React from 'react';

import tw from "tailwind-styled-components";

//interface

//type

//style
const Position = tw.footer<any>`
    absolute inset-x-0 bottom-0
    w-full h-16

    border-t dark:border-zinc-800
    bg-zinc-100 dark:bg-zinc-900
    text-zinc-400 dark:text-zinc-600
`;

const Layout = tw.div<any>`
    2xs:flex-col
    2xs:items-center
    2xs:justify-center

    xs:flex-col
    xs:items-center
    xs:justify-center

    flex
    items-center
    justify-between

    w-full h-full
    container mx-auto
    xl:px-36
`;

const CopyrightText = tw.p<any>`
    text-sm
    font-thin
`;

const CopyrightLink = tw.a<any>`
    text-sm
    font-thin
    cursor-pointer
    dark:hover:text-zinc-400
`;

//react
const Footer:React.FC = () => {
    return (
        <Position>
            <Layout>
                <CopyrightText>Copyright © 2022 Dev Lap Inc.</CopyrightText>
                <CopyrightLink>Edit this page on GitHub</CopyrightLink>
            </Layout>
        </Position>
    );
};

export default Footer;