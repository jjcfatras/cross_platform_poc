import "~/libs/ui/theming/unistyles";

import type { AppProps } from "next/app";
import Head from "next/head";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web2!</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
