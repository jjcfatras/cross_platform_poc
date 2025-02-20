import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DesignOverviewScreen, HomeScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const RootStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen component={HomeScreen} name="Home" />
    <Stack.Screen component={DesignOverviewScreen} name="DesignOverview" />
  </Stack.Navigator>
);
