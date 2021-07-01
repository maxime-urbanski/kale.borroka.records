import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../src/components/Layout/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="author" content="Maxiloud" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="Kale Borroka Records" />
        <meta
          name="keywords"
          content="Punk, Oi!, HardxCore, Skin, antifascist, Euskal Herria, Baiona, Label, Distro/"
        />
        <meta
          name="description"
          content="Kale Borroka Records, Label &amp; distro from Baiona, Euskal Herria. Shop Music."
        />
        <title>
          Kale Borroka Records | Antifascit distro &amp; label from Baiona,Euskal Herria !
        </title>
      </Head>
      <>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    </>
  )
}

export default MyApp
