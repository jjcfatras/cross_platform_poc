import "~/libs/ui/src/theming/unistyles";

import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";
import { StrictMode } from "react";

import { DesignOverviewScreen } from "../screens/DesignOverview.screen";
import { HomeScreen } from "../screens/Home.screen";

const prefix = Linking.createURL("/");

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    DesignOverview: {
      linking: {
        path: "design-overview",
      },
      screen: DesignOverviewScreen,
    },
    Home: {
      linking: {
        path: "/",
      },
      screen: HomeScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export const App = () => {
  const _linking = {
    prefixes: [prefix],
  };

  return (
    <StrictMode>
      <Navigation linking={_linking} />
    </StrictMode>
  );
};
