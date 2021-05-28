import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

import '../styles/globals.css';
import { Header, Footer } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Head>
        <title>Jianjian Liao - React Developer, Cyclist, Sailor.</title>
      </Head>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
export default MyApp;
