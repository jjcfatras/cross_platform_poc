import "~/libs/ui/src/theming/unistyles";
import "./fonts.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import {
  hydrateServerUnistyles,
  UnistylesRuntime,
  useUnistyles,
} from "react-native-unistyles";

const isDom =
  typeof window === "object" &&
  "document" in window &&
  "navigator" in window &&
  "HTMLElement" in window;

// @ts-expect-error react-native-unistyles Pressable has a dependency on HTMLElement
// eslint-disable-next-line @typescript-eslint/no-empty-function
globalThis.HTMLElement = isDom ? window.HTMLElement : function () {};

function CustomApp({ Component, pageProps }: AppProps) {
  const { theme } = useUnistyles();

  useEffect(() => {
    hydrateServerUnistyles();
  }, []);

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
