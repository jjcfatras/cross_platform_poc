import { type ActivityIndicatorProps, ActivityIndicator } from "react-native";
import { withUnistyles } from "react-native-unistyles";

const UniSpinner = withUnistyles(ActivityIndicator, (theme) => ({
  color: theme.colors.brand,
}));

export type SpinnerProps = Omit<ActivityIndicatorProps, "color">;

export const Spinner = (props: SpinnerProps) => {
  return <UniSpinner size={100} {...props} />;
};
