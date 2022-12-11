import React from 'react';

import tw from "tailwind-styled-components";

//interface

//type
type ChildrenComponentProps = {
    children:React.ReactNode
}


//style
const Position = tw.div<any>`
    absolute inset-y-16
    w-full
    overflow-auto
`
const Layout = tw.div<any>`
    flex
    container mx-auto
    xl:px-36
`

//react
const Main = ({children} : ChildrenComponentProps) => {
    return (
        <Position>
            <Layout>
                {children}
            </Layout>
        </Position>
        
    )
}

export default Main;