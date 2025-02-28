import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useUnistyles } from "react-native-unistyles";

import { DesignOverviewScreen, HomeScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const { theme } = useUnistyles();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
        headerShown: false,
      }}
    >
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={DesignOverviewScreen} name="DesignOverview" />
    </Stack.Navigator>
  );
};
