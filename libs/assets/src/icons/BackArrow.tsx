import Svg, { type SvgProps, Path } from "react-native-svg";
import { withUnistyles } from "react-native-unistyles";

export const BackArrow = withUnistyles((props: SvgProps) => (
  <Svg height="100" viewBox="0 0 24 24" width="100" {...props}>
    <Path
      d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"
      fill="currentColor"
    />
  </Svg>
));
