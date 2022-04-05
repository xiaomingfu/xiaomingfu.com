import "../styles/globals.css";

import Script from "next/script";

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="ga"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-2378L7BQGH"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-2378L7BQGH');
            </script>
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
