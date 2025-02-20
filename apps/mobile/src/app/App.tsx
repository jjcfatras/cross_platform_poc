import "~/libs/ui/src/theming/unistyles";

import NetInfo, { fetch } from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { AppState } from "react-native";
import { SWRConfig } from "swr";

import { RootStack } from "../navigation";

const prefix = Linking.createURL("/");

const config = {
  // screen:path mappings for linking
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
    <SWRConfig
      value={{
        initFocus: (callback) => {
          let appState = AppState.currentState;

          const onAppStateChange = (
            nextAppState: typeof AppState.currentState,
          ) => {
            /* If it's resuming from background or inactive mode to active one */
            if (
              appState.match(/inactive|background/) &&
              nextAppState === "active"
            ) {
              callback();
            }
            appState = nextAppState;
          };

          const subscription = AppState.addEventListener(
            "change",
            onAppStateChange,
          );

          return () => subscription.remove();
        },
        initReconnect: (callback) => {
          const isConnected = fetch()
            .then((state) => state.isConnected)
            .catch(() => false);

          const unsubscribe = NetInfo.addEventListener((nextNetworkState) => {
            if (!isConnected && nextNetworkState.isConnected) {
              callback();
            }
          });

          return () => unsubscribe();
        },
        isVisible: () => true,
        provider: () => new Map(),
      }}
    >
      <NavigationContainer linking={_linking}>
        <RootStack />
      </NavigationContainer>
    </SWRConfig>
  );
};
