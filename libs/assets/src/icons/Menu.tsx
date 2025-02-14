import Svg, { type SvgProps, Path } from "react-native-svg";
import { withUnistyles } from "react-native-unistyles";

export const Menu = withUnistyles((props: SvgProps) => (
  <Svg height="100" viewBox="0 0 24 24" width="100" {...props}>
    <Path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" fill="currentColor" />
  </Svg>
));
