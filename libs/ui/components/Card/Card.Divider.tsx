import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const CardDivider = () => {
  const { styles } = useStyles(styleSheet);

  return <View style={styles.divider} />;
};

const styleSheet = createStyleSheet((theme) => ({
  divider: {
    backgroundColor: theme.colors.divider,
    height: 1,
    margin: theme.spacing[1],
    width: "100%",
  },
}));
