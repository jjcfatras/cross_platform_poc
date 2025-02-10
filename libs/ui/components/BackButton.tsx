"use client";

import { type TouchableOpacityProps, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { useLink } from "solito/navigation";

import BackArrow from "~/libs/assets/src/svgs/back_arrow.svg";

import { Image } from "./Image";

export type BackButtonProps = TouchableOpacityProps;

export const BackButton = ({ style, ...rest }: BackButtonProps) => {
  const linkProps = useLink({
    href: "/",
  });

  return (
    <TouchableOpacity style={[styles.button, style]} {...rest} {...linkProps}>
      <Image alt="back arrow" fill src={BackArrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create((theme) => ({
  button: {
    backgroundColor: theme.colors.brand,
    borderRadius: 25,
    height: 50,
    width: 50,
  },
}));
