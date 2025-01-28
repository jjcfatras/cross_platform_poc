import { View, type ViewProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const CardBody = ({ children, ...rest }: ViewProps) => {
  const { styles } = useStyles(styleSheet);

  return (
    <View style={styles.body} {...rest}>
      {children}
    </View>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  body: {
    padding: theme.spacing[1],
  },
}));
