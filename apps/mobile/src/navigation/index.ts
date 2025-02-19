import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DesignOverviewScreen, HomeScreen } from "../screens";

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

export const Navigation = createStaticNavigation(RootStack);
