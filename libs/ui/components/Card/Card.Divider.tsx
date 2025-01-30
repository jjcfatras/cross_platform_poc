import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const CardDivider = () => <View style={styles.divider} />;

const styles = StyleSheet.create((theme) => ({
  divider: {
    backgroundColor: theme.colors.divider,
    height: 1,
    margin: theme.spacing[1],
    width: "100%",
  },
}));
