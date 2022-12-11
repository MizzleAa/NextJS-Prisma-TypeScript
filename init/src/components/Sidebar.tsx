import tw from "tailwind-styled-components";

const Position = tw.aside<any>`
    
`;

const Layout = tw.div<any>`
    w-full h-full
    bg-red-900
`

const Sidebar:React.FC = () => { 
    return (
        <Position>
            <Layout>
                sidebar
            </Layout>
        </Position>
    )
}

export default Sidebar;