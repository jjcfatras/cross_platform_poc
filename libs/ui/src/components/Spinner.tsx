"use client";

import { type ActivityIndicatorProps, ActivityIndicator } from "react-native";
import { useStyles } from "react-native-unistyles";

export type SpinnerProps = Omit<ActivityIndicatorProps, "color">;

export const Spinner = (props: SpinnerProps) => {
  const { theme } = useStyles();
  return <ActivityIndicator color={theme.colors.brand} size={100} {...props} />;
};
