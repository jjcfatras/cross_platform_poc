// import { IoMdMenu } from "react-icons/io";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Text } from "./Text";

export const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText} type="h1">
      Demo
    </Text>
    {/* <IoMdMenu height={80} style={styles.menuIcon} width={80} /> */}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  header: {
    alignItems: "center",
    backgroundColor: theme.colors.brand,
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    // width: "100%",
  },
  headerText: {
    color: theme.colors.white,
    textAlign: "center",
  },
  menuIcon: {
    color: theme.colors.white,
    position: "absolute",
    right: theme.spacing[4],
  },
}));
