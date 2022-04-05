import "../styles/globals.css";

import Script from "next/script";

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="gtag"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2378L7BQGH"
      ></Script>
      <Script
        id="gtag-inline"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2378L7BQGH');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
