import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-slate-800 font-sans text-primary antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
