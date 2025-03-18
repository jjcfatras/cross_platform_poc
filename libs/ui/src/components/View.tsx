import { type ViewProps as RNViewProps, View as RNView } from "react-native";
import { withUnistyles } from "react-native-unistyles";

export type ViewProps = RNViewProps;

export const View = withUnistyles(({ children, ...rest }: ViewProps) => (
  <RNView {...rest}>{children}</RNView>
));
