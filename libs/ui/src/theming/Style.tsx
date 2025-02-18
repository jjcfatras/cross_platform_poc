"use client";

import "./unistyles";

import { useServerInsertedHTML } from "next/navigation";
import type { PropsWithChildren } from "react";
import { useServerUnistyles } from "react-native-unistyles/server";

export const Style = ({ children }: PropsWithChildren) => {
  const unistyles = useServerUnistyles();

  useServerInsertedHTML(() => unistyles);

  return <>{children}</>;
};
