import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import { Header, Footer, ScrollToTop } from 'components';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Jianjian Liao - React Developer, Cyclist, Sailor.</title>
        <meta
          name="description"
          content="Jesse's portfolio blog as a fullstack developer career showcase."
        />
        <meta property="og:type" content="blog" />
        <meta property="og:site_name" content="Jesse L" />
        <meta property="og:title" content="Jesse's developer portfolio blog" />
        <meta
          property="og:description"
          content="a robust SPA to present my frontend development skills, judge it with your eyes."
        />
      </Head>
      <Header />
      <main className="flex flex-col justify-between mx-auto pt-10 md:pt-16 lg:pt-20 max-w-4xl min-h-almost">
        <Component {...pageProps} />
        <ScrollToTop />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
export default MyApp;
