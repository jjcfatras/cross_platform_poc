import { StyleSheet } from "react-native-unistyles";

import { HEADER_HEIGHT_MOBILE, HEADER_HEIGHT_WEB } from "../../constants";
import { type ContainerProps, Container } from "../Container";
import { MenuButton } from "../MenuButton";
import { Text } from "../Text";
import { TextLink } from "../TextLink";
import { View } from "../View";

const LINKS = [
  { destination: "/design-overview", label: "Design Overview" },
  { destination: "/", label: "Home" },
];

export type HeaderBaseProps = ContainerProps & {
  isPressed: boolean;
  onPress: () => void;
  type: "mobile" | "web";
};

export const HeaderBase = ({
  isPressed,
  onPress,
  style,
  type,
  ...rest
}: HeaderBaseProps) => (
  <Container style={[styles.container, style]} {...rest}>
    <View style={styles.header(type)}>
      <Text color="inverse" type="h1">
        Demo
      </Text>
      <MenuButton onPress={onPress} style={styles.headerRight} />
    </View>
    {isPressed && (
      <View style={styles.subHeader}>
        {LINKS.map((link) => (
          <TextLink href={link.destination} key={link.label}>
            {link.label}
          </TextLink>
        ))}
      </View>
    )}
  </Container>
);

const styles = StyleSheet.create((theme) => ({
  container: {
    _web: {
      _classNames: "header",
    },
    backgroundColor: theme.colors.brand,
    left: 0,
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[1],
    position: "absolute",
    right: 0,
    top: 0,
  },
  header: (type: HeaderBaseProps["type"]) => ({
    alignItems: "center",
    flexDirection: "row",
    height: type === "web" ? HEADER_HEIGHT_WEB : HEADER_HEIGHT_MOBILE,
    justifyContent: "center",
  }),
  headerRight: {
    aspectRatio: 1 / 1,
    height: "100%",
    position: "absolute",
    right: theme.spacing[0],
    width: undefined,
  },
  subHeader: {
    alignItems: "center",
    flexDirection: "row",
    height: "auto",
    justifyContent: "space-evenly",
    paddingVertical: theme.spacing[4],
  },
}));
