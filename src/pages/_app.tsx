import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IPÊ - Instituto de Pesquisas Ecológicas</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="/css/tailwind.css"></link>
        <link href="/img/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
        <meta name="description" content="Pesquisa, Educação e Negócios Sustentáveis para a conservação da biodiversidade brasileira.    "/>

        <meta name="title" content="IPÊ - Instituto de Pesquisas Ecológicas" />
        <meta name="description" content="Pesquisa, Educação e Negócios Sustentáveis para a conservação da biodiversidade brasileira.    " />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://voluntariado.ipe.org.br/" />
        <meta property="og:title" content="IPÊ - Instituto de Pesquisas Ecológicas" />
        <meta property="og:description" content="Pesquisa, Educação e Negócios Sustentáveis para a conservação da biodiversidade brasileira.    " />
        <meta property="og:image" content="/img/banner-rede.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://voluntariado.ipe.org.br/" />
        <meta property="twitter:title" content="IPÊ - Instituto de Pesquisas Ecológicas" />
        <meta property="twitter:description" content="Pesquisa, Educação e Negócios Sustentáveis para a conservação da biodiversidade brasileira.    " />
        <meta property="twitter:image" content="/img/banner-rede.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
