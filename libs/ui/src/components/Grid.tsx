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
      display: "grid",
      gridTemplateColumns: {
        [mq.only.width("lg")]: "repeat(3, 1fr)",
        [mq.only.width("md", "lg")]: "repeat(2, 1fr)",
        [mq.only.width("xs", "md")]: "1fr",
      } as unknown as string,
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
  },
}));
