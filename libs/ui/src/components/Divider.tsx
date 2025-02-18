import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create((theme) => ({
  divider: {
    alignSelf: "stretch",
    backgroundColor: theme.colors.divider,
    height: StyleSheet.hairlineWidth,
    marginVertical: theme.spacing[4],
  },
}));
