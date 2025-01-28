import { View, type ViewProps } from "react-native";
import { createStyleSheet, mq, useStyles } from "react-native-unistyles";

type ContainerProps = ViewProps;

export const Container = ({ children, ...rest }: ContainerProps) => {
  const { styles } = useStyles(styleSheet);

  return (
    <View style={styles.container} {...rest}>
      {children}
    </View>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  container: {
    alignContent: "center",
    alignSelf: "center",
    borderColor: theme.colors.good,
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    width: {
      [mq.only.width("lg", "xl")]: 960,
      [mq.only.width("md", "lg")]: 720,
      [mq.only.width("sm", "md")]: 540,
      [mq.only.width("xl", "xxl")]: 1140,
      [mq.only.width("xs", "sm")]: "100%",
      [mq.only.width("xxl")]: 1320,
    },
  },
}));
