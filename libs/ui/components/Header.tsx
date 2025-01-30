import { IoMdMenu } from "react-icons/io";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Text } from "./Text";

export const Header = () => {
  const { styles } = useStyles(styleSheet);
  return (
    <View style={styles.header}>
      <Text style={styles.headerText} type="h1">
        Demo
      </Text>
      <IoMdMenu style={styles.menuIcon} />
    </View>
  );
};

const styleSheet = createStyleSheet((theme) => ({
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
    height: 80,
    position: "absolute",
    right: theme.spacing[4],
    width: 80,
  },
}));
