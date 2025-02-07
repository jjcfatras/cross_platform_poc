"use client";

import Image from "next/image";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet, withUnistyles } from "react-native-unistyles";
import { TextLink } from "solito/link";

import Menu from "~/libs/assets/src/svgs/menu.svg";

import { Text } from "./Text";

const LINKS = [
  // { destination: "/settings", label: "Settings" },
  { destination: "/design-overview", label: "Design Overview" },
];

const UniLink = withUnistyles(TextLink);

export const Header = () => {
  const [isPressed, setIsPressed] = useState(false);

  const _handlePress = () => setIsPressed((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text color="white" type="h1">
          Demo
        </Text>
        <TouchableOpacity onPress={_handlePress} style={styles.menu}>
          <Image alt="menu" fill src={Menu} />
        </TouchableOpacity>
      </View>
      {isPressed && (
        <View style={styles.subHeader}>
          {LINKS.map((link, index) => (
            <UniLink href={link.destination} key={index}>
              <Text color="white" type="link">
                {link.label}
              </Text>
            </UniLink>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.brand,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    width: "100%",
  },
  menu: {
    height: 100,
    position: "absolute",
    right: theme.spacing[4],
    width: 100,
  },
  subHeader: {
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    justifyContent: "space-evenly",
  },
}));
