import "~/libs/ui/src/theming/unistyles";

import * as Linking from "expo-linking";

import { Navigation } from "../navigation";
const prefix = Linking.createURL("/");

export const App = () => {
  const _linking = {
    prefixes: [prefix],
  };

  return <Navigation linking={_linking} />;
};
