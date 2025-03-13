"use client";

import { useCallback } from "react";
import {
  type PressableProps,
  type PressableStateCallbackType,
  Pressable,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { useRouter } from "solito/navigation";

import { BackArrow } from "~/libs/assets/src/icons/BackArrow";

import { HOVER_OPACITY } from "../constants";

export type BackButtonProps = Omit<PressableProps, "children"> & {
  size?: number;
};

export const BackButton = ({ size = 50, style, ...rest }: BackButtonProps) => {
  const { back } = useRouter();

  const _getStyles = useCallback(
    (state: PressableStateCallbackType) => {
      const _style = typeof style === "function" ? style(state) : style;
      return [styles.button(size, state.pressed), _style];
    },
    [size, style],
  );

  const _handlePress = () => back();

  return (
    <Pressable onPress={_handlePress} style={_getStyles} {...rest}>
      {({ pressed }) => <BackArrow style={styles.arrow(size, pressed)} />}
    </Pressable>
  );
};

const styles = StyleSheet.create((theme) => ({
  arrow: (size: number, isPressed: boolean) => ({
    color: isPressed ? theme.colors.brand : theme.colors.inverse,
    height: size,
    width: size,
  }),
  button: (size: number, isPressed: boolean) => ({
    _web: {
      _hover: {
        opacity: HOVER_OPACITY,
      },
    },
    backgroundColor: isPressed ? theme.colors.inverse : theme.colors.brand,
    borderColor: theme.colors.brand,
    borderRadius: size / 2,
    borderWidth: 2,
    height: size,
    width: size,
  }),
}));
