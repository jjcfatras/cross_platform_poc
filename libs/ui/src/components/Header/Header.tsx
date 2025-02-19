"use client";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { type HeaderBaseProps, HeaderBase } from "./Header.base";

export type HeaderProps = Omit<HeaderBaseProps, "isPressed" | "onPress">;

export const Header = (props: HeaderProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const _handlePress = () => setIsPressed((prevState) => !prevState);

  const navigation = useNavigation();

  navigation.addListener("blur", () => {
    return isPressed ? setIsPressed(false) : undefined;
  });

  return <HeaderBase isPressed={isPressed} onPress={_handlePress} {...props} />;
};
