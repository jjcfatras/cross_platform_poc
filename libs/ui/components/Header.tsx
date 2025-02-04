"use client";

import Image from "next/image";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { TextLink } from "solito/link";

import Menu from "../images/menu.svg";

import { Text } from "./Text";

const LINKS = [{ destination: "/settings", label: "Settings" }];

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
          <View>
            <Image alt="menu" height={100} src={Menu} width={100} />
          </View>
        </TouchableOpacity>
      </View>
      {isPressed && (
        <View style={styles.subHeader}>
          {LINKS.map((link, index) => (
            <TextLink href={link.destination} key={index}>
              <Text color="white" type="link">
                {link.label}
              </Text>
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
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    width: "100%",
  },
  link: {
    color: theme.colors.white,
  },
  menu: {
    height: 100,
    position: "absolute",
    right: theme.spacing[4],
  },
  subHeader: {
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    justifyContent: "space-evenly",
  },
  test: {},
}));
