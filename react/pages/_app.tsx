import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import GoogleFonts from 'next-google-fonts';

import GlobalStyle from 'styles/global';

import favicon from 'assets/favicon.png';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <title>Spider Man: Miles Morales | PS5</title>

        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Head>

      <Component {...pageProps} />

      <GlobalStyle />

      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400&display=swap" />
    </>
  );
};

export default MyApp;
