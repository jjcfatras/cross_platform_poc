import { type ViewProps, View } from "react-native";
import { mq, StyleSheet } from "react-native-unistyles";

export type GridProps = Pick<ViewProps, "children">;

export const Grid = ({ children }: GridProps) => (
  <View style={styles.grid}>{children}</View>
);

const styles = StyleSheet.create((theme) => ({
  grid: {
    _web: {
      _classNames: "grid",
    },
    flexDirection: {
      [mq.only.width("xs", "md")]: "column",
      // eslint-disable-next-line perfectionist/sort-objects
      [mq.only.width("md")]: "row",
    },
    flexWrap: {
      [mq.only.width("xs", "md")]: "nowrap",
      // eslint-disable-next-line perfectionist/sort-objects
      [mq.only.width("md")]: "wrap",
    },
    gap: theme.spacing[4],
    justifyContent: "center",
    paddingVertical: theme.spacing[4],
  },
}));
