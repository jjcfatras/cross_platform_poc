"use client";

import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const Divider = () => {
  const { styles } = useStyles(styleSheet);
  return <View style={styles.divider} />;
};

const styleSheet = createStyleSheet((theme) => ({
  divider: {
    alignSelf: "stretch",
    backgroundColor: theme.colors.divider,
    height: 1,
    marginVertical: theme.spacing[4],
  },
}));
