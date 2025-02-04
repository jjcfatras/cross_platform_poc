"use client";
import Image from "next/image";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import BackArrow from "../images/back_arrow.svg";

type BackButtonProps = TouchableOpacityProps;

export const BackButton = ({ style, ...rest }: BackButtonProps) => {
  const _handlePress = () => window.history.back();

  return (
    <TouchableOpacity
      onPress={_handlePress}
      style={[styles.button, style]}
      {...rest}
    >
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
