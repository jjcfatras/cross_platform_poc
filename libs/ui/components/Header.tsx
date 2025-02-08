"use client";

import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import Menu from "~/libs/assets/src/svgs/menu.svg";

import { Image } from "./Image";
import { Text } from "./Text";
import { TextLink } from "./TextLink";

const LINKS = [{ destination: "/design-overview", label: "Design Overview" }];

export const Header = () => {
  const [isPressed, setIsPressed] = useState(false);

  const _handlePress = () => setIsPressed((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text color="inverse" type="h1">
          Demo
        </Text>
        <TouchableOpacity onPress={_handlePress} style={styles.menu}>
          <Image alt="menu" fill src={Menu} />
        </TouchableOpacity>
      </View>
      {isPressed && (
        <View style={styles.subHeader}>
          {LINKS.map((link) => (
            <TextLink href={link.destination} key={link.label}>
              {link.label}
            </TextLink>
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
