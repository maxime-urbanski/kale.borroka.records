import Head from 'next/head'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="author" content="Maxiloud" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="Kale Borroka Records" />
        <meta name="keywords" content="Punk, Oi!, HardxCore, Skin, antifa/" />
        <meta
          name="description"
          content="Kale Borroka Records, Label &amp; distro from Baiona, Euskal Herria. Shop Music."
        />
        <title>
          Kale Borroka Records | Antifascit distro &amp; label from Baiona,Euskal Herria !
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
