"use client";

import { useCallback } from "react";
import {
  type PressableProps,
  type PressableStateCallbackType,
  Pressable,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { HOVER_OPACITY } from "../constants";

import { type TextProps, Text } from "./Text";

export type ButtonProps = Omit<PressableProps, "children"> &
  Pick<TextProps, "children">;

export const Button = ({ children, style, ...rest }: ButtonProps) => {
  const _getStyles = useCallback(
    (state: PressableStateCallbackType) => {
      const _style = typeof style === "function" ? style(state) : style;
      return [styles.button(state.pressed), _style];
    },
    [style],
  );
  return (
    <Pressable style={_getStyles} {...rest}>
      {({ pressed }) => (
        <Text style={styles.text(pressed)} type="bold">
          {children}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create((theme) => ({
  button: (isPressed: boolean) => ({
    _web: {
      _hover: {
        opacity: HOVER_OPACITY,
      },
    },
    alignItems: "center",
    backgroundColor: isPressed ? theme.colors.inverse : theme.colors.brand,
    borderColor: theme.colors.brand,
    borderRadius: theme.sizing[4],
    borderWidth: 2,
    maxWidth: 400,
    minWidth: 100,
    padding: theme.spacing[4],
  }),
  text: (isPressed) => ({
    color: isPressed ? theme.colors.brand : theme.colors.inverse,
  }),
}));
