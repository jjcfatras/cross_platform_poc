"use client";

import { type ViewProps, View } from "react-native";
import { createStyleSheet, mq, useStyles } from "react-native-unistyles";

export type GridProps = Pick<ViewProps, "children">;

export const Grid = ({ children }: GridProps) => {
  const { styles } = useStyles(styleSheet);
  return <View style={styles.grid}>{children}</View>;
};

const styleSheet = createStyleSheet((theme) => ({
  grid: {
    _web: {
      _classNames: "grid",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    },
    flexDirection: {
      [mq.only.width("md")]: "row",
      [mq.only.width("xs", "md")]: "column",
    },
    flexWrap: {
      [mq.only.width("md")]: "wrap",
      [mq.only.width("xs", "md")]: "nowrap",
    },
    gap: theme.spacing[4],
    justifyContent: "center",
    width: "100%",
  },
}));
