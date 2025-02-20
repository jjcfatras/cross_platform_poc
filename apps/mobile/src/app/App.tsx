import "~/libs/ui/src/theming/unistyles";

import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStack } from "../navigation";

const prefix = Linking.createURL("/");

const config = {
  screens: {
    DesignOverview: "design-overview",
    Home: "/",
  },
};

export const App = () => {
  const _linking = {
    config,
    prefixes: [prefix],
  };

  return (
    <NavigationContainer linking={_linking}>
      <RootStack />
    </NavigationContainer>
  );
};
