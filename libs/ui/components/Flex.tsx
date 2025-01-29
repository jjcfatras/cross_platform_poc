import { View, type ViewProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type FlexProps = ViewProps;

export const Flex = ({ children, ...rest }: FlexProps) => {
  const { styles } = useStyles(styleSheet);

  return (
    <View style={styles.flex} {...rest}>
      {children}
    </View>
  );
};

const styleSheet = createStyleSheet({
  flex: {
    flex: 1,
    flexDirection: "column",
  },
});
