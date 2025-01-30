import { View, type ViewProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type FlexProps = ViewProps;

export const Flex = ({ children, ...rest }: FlexProps) => (
  <View style={styles.flex} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  flex: {
    borderColor: theme.colors.bad,
    borderWidth: 2,
    flex: 1,
    flexDirection: "column",
  },
}));
