"use client";

import { type TouchableOpacityProps, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { usePathname, useRouter } from "solito/navigation";

import { BackArrow } from "~/libs/assets/src/icons/BackArrow";

export type BackButtonProps = Omit<TouchableOpacityProps, "children"> & {
  size?: number;
};

export const BackButton = ({ size = 50, style, ...rest }: BackButtonProps) => {
  const { back, push } = useRouter();
  const _pathName = usePathname();

  const _handlePress = () => (_pathName !== "/" ? back() : push("/"));

  return (
    <TouchableOpacity
      onPress={_handlePress}
      style={[styles.button(size), style]}
      {...rest}
    >
      <BackArrow style={styles.arrow(size)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create((theme) => ({
  arrow: (size: number) => ({
    color: theme.colors.inverse,
    height: size,
    width: size,
  }),
  button: (size: number) => ({
    backgroundColor: theme.colors.brand,
    borderRadius: size / 2,
    height: size,
    width: size,
  }),
}));
