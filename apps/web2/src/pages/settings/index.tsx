"use client";

import { Button, View } from "react-native";
// import DropDownPicker, {
//   type DropDownPickerProps,
//   type ItemType,
//   type ValueType,
// } from "react-native-dropdown-picker";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

import {
  BackButton,
  Container,
  Divider,
  Screen,
  Text,
} from "~/libs/ui/components";

// const THEME_OPTIONS = [
//   { label: "dark", value: "dark" },
//   { label: "light", value: "light" },
//   { label: "system", value: "system" },
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
          <Button
            onPress={() => {
              UnistylesRuntime.setAdaptiveThemes(false);
              UnistylesRuntime.setTheme("dark");
            }}
            title="dark"
          />
          <Button
            onPress={() => {
              UnistylesRuntime.setAdaptiveThemes(false);
              UnistylesRuntime.setTheme("light");
            }}
            title="light"
          />
          <Button
            onPress={() => {
              UnistylesRuntime.setAdaptiveThemes(true);
            }}
            title="system"
          />
        </View>
      </Container>
    </Screen>
  );
};

export default SettingsPage;

const styles = StyleSheet.create((theme) => ({
  header: {
    textAlign: "center",
  },
  sectionRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  test: {
    backgroundColor: theme.colors.bad,
  },
}));
