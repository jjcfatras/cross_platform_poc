import "~/libs/ui/src/theming/unistyles";
import "./fonts.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { UnistylesRuntime, useUnistyles } from "react-native-unistyles";

function CustomApp({ Component, pageProps }: AppProps) {
  const { theme } = useUnistyles();

  useEffect(() => {
    UnistylesRuntime.setRootViewBackgroundColor(theme.colors.background);
  }, [theme.colors.background]);
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
