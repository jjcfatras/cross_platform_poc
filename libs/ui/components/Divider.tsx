import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create((theme) => ({
  divider: {
    backgroundColor: theme.colors.divider,
    height: StyleSheet.hairlineWidth,
    margin: theme.spacing[1],
    width: "100%",
  },
}));
