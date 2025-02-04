"use client";
import { useState } from "react";
import { StyleSheet } from "react-native-unistyles";

import {
  BackButton,
  Container,
  Picker,
  Screen,
  Text,
} from "~/libs/ui/components";

const SettingsPage = () => {
  const [theme, setTheme] = useState("");

  const _items = [
    { label: "dark", value: "dark" },
    { label: "light", value: "light" },
  ];

  return (
    <Screen>
      <Container hasHeader={false}>
        <BackButton />
        <Text style={styles.header} type="h1">
          Settings
        </Text>

        <Picker items={_items} onValueChange={setTheme} selectedValue={theme} />
      </Container>
    </Screen>
  );
};

export default SettingsPage;

const styles = StyleSheet.create((theme) => ({
  header: {
    textAlign: "center",
  },
}));
