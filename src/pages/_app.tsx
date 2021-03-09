import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles, { theme } from '../styles/GlobalStyles'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Banner from '../components/Banner/Banner'
import 'swiper/swiper.min.css'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Naruto Web</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="theme-color" content="#06092b" />
        <meta name="description" content="A simple project about naruto" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Banner />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
