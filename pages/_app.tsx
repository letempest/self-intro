import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';
import { Header, Footer } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Jianjian Liao - React Developer, Cyclist, Sailor.</title>
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
export default MyApp;
