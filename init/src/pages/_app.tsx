import type { AppProps } from 'next/app'
import Header from '../components/Header';
import Heads from '../components/Heads';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { ThemeProvider } from "next-themes";
import { appWithTranslation } from 'next-i18next';

import tw from "tailwind-styled-components";

const Position = tw.div<any>``

//react
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Heads />
      <ThemeProvider enableSystem={true} attribute="class">
        <Position>
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </Position>
      </ThemeProvider>
    </>
  )
}



export default appWithTranslation(App);