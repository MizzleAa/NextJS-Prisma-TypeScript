import type { AppProps } from 'next/app'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Heads from '../components/Heads';
import Main from '../components/Main';

import { ThemeProvider } from "next-themes";

//react
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Heads />
      <ThemeProvider enableSystem={true} attribute="class">
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
      </ThemeProvider>
    </>
  )
}

export default App;