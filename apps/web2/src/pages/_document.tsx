import "~/libs/ui/src/theming/unistyles";

import Document, {
  type DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { Children } from "react";
import { AppRegistry } from "react-native";
import {
  getServerUnistyles,
  resetServerUnistyles,
} from "react-native-unistyles/server";

// Follows the setup for react-native-web:
// https://necolas.github.io/react-native-web/docs/setup/#root-element
// Plus additional React Native scroll and text parity styles for various
// browsers.
// Force Next-generated DOM elements to fill their parent's height
const style = `
html, body, #__next {
  -webkit-overflow-scrolling: touch;
}
#__next {
  display: flex;
  flex-direction: column;
  height: 100%;
}
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}
body {
  /* Allows you to scroll below the viewport; default value is visible */
  overflow-y: auto;
  overscroll-behavior-y: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: scrollbar;
}
`;

export default class MyDocument extends Document {
  static override async getInitialProps({ renderPage }: DocumentContext) {
    AppRegistry.registerComponent("main", () => Main);
    //@ts-expect-error AppRegistry is missing type information
    const { getStyleElement } = AppRegistry.getApplication("main");

    const page = await renderPage();

    resetServerUnistyles();

    const styles = [
      <style
        dangerouslySetInnerHTML={{ __html: style }}
        key="react-native-style"
      />,
      getStyleElement(),
      getServerUnistyles(),
    ];
    return { ...page, styles: Children.toArray(styles) };
  }

  override render() {
    return (
      <Html style={{ height: "100%", margin: 0 }}>
        <Head />
        <body style={{ height: "100%", margin: 0, overflow: "auto" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
