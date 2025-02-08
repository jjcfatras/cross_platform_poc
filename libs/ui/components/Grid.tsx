import { View, type ViewProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export type GridProps = Pick<ViewProps, "children">;

export const Grid = ({ children }: GridProps) => (
  <View style={styles.grid}>{children}</View>
);

const styles = StyleSheet.create((theme) => ({
  grid: {
    flexDirection: {
      xs: "column",
      md: "row",
    },
    flexWrap: "wrap",
    gap: theme.spacing[4],
    justifyContent: "center",
  },
}));
