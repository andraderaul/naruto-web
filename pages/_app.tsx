/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import GlobalStyles, { theme } from '../styles/GlobalStyles';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Banner/Banner';
import 'swiper/swiper.min.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
