import Footer from '@/components/layouts/core/Footer';
import Navbar from '@/components/layouts/core/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'react-multi-carousel/lib/styles.css';
import 'swiper/css';
import 'swiper/css/pagination';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Muvuru</title>
      </Head>
      <Navbar />
      <div className='min-h-screen'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
