import GlobalStyles, { theme } from '../styles/GlobalStyles';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import Banner from '../components/Banner/Banner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Banner />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
