import Image from "next/image";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import Menu from "../images/menu.svg";

import { Text } from "./Text";

// const LINKS = [{ destination: "/settings", label: "Settings" }];

export const Header = () => {
  const [isPressed, setIsPressed] = useState(false);

  const _handlePress = () => setIsPressed((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText} type="h1">
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
          <Text style={styles.subHeaderText}>Test</Text>
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
    backgroundColor: theme.colors.brand,
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    width: "100%",
  },
  headerText: {
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
  },
  subHeaderText: {
    color: theme.colors.white,
  },
}));
