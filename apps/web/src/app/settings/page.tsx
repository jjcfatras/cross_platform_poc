"use client";

import { View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

import {
  BackButton,
  Container,
  Divider,
  // Picker,
  Screen,
  Text,
} from "~/libs/ui/components";

// const THEME_OPTIONS = [
//   { label: "dark", value: "dark" },
//   { label: "light", value: "light" },
// ];

// type THEMES = "dark" | "light" | "system";

// const _reducer = (state: THEMES, action: { type: string }) => {
//   switch (action.type) {
//     case "dark": {
//       UnistylesRuntime.setAdaptiveThemes(false);
//       UnistylesRuntime.setTheme("dark");
//       state = "dark";
//       return state;
//     }
//     case "light": {
//       UnistylesRuntime.setAdaptiveThemes(false);
//       UnistylesRuntime.setTheme("light");
//       state = "light";
//       return state;
//     }
//     case "system":
//     default: {
//       state = "system";
//       UnistylesRuntime.setAdaptiveThemes(true);

//       return state;
//     }
//   }
// };

const SettingsPage = () => {
  // const [theme, dispatch] = useReducer(_reducer, "system");

  console.log({ currentTheme: UnistylesRuntime.colorScheme });
  console.log({ adaptiveTheme: UnistylesRuntime.hasAdaptiveThemes });

  return (
    <Screen>
      <Container hasHeader={false}>
        <BackButton />
        <Text style={styles.header} type="h1">
          Settings
        </Text>
        <Divider />
        <View style={styles.sectionRow}>
          <Text type="h2">Select Your Theme: </Text>
          {/* <Picker
            items={THEME_OPTIONS}
            onValueChange={(itemValue) => dispatch({ type: itemValue })}
            selectedValue={theme}
          /> */}
        </View>
      </Container>
    </Screen>
  );
};

export default SettingsPage;

const styles = StyleSheet.create(() => ({
  header: {
    textAlign: "center",
  },
  sectionRow: {
    alignItems: "center",
    flexDirection: "row",
  },
}));
