import React from 'react';

import tw from "tailwind-styled-components";

//interface

//type

//style
const Layout = tw.div<any>`
    w-full
    xs:invisible
    p-4 xs:p-0
    border
    bg-gray-100
    text-gray-400
`

//react
const Footer:React.FC = () => {
    return (
        <Layout>
            Footer
        </Layout>
    )
}

export default Footer;