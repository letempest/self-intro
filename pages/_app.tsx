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
      <main className="flex flex-col justify-between mx-auto pt-10 md:pt-16 lg:pt-20 max-w-4xl min-h-almost">
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
export default MyApp;
