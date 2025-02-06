"use client";

import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { StyleSheet, withUnistyles } from "react-native-unistyles";
import { SolitoImage } from "solito/image";
import { useLink } from "solito/navigation";

import BackArrow from "~/libs/assets/src/svgs/back_arrow.svg";

const UniImage = withUnistyles(SolitoImage);

type BackButtonProps = TouchableOpacityProps;

export const BackButton = ({ style, ...rest }: BackButtonProps) => {
  const linkProps = useLink({
    href: "/",
  });

  return (
    <TouchableOpacity style={[styles.button, style]} {...rest} {...linkProps}>
      <UniImage alt="back arrow" fill src={BackArrow} />
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
