"use client";

import "./unistyles";

import { useServerInsertedHTML } from "next/navigation";
import { useRef } from "react";
import type { PropsWithChildren } from "react";
import {
  getServerUnistyles,
  resetServerUnistyles,
} from "react-native-unistyles/server";

const isServer = () =>
  typeof window === "undefined" || typeof document === "undefined";

// Don't use this hook from unistyles library. It has hydration issues
const useServerUnistyles = (settings = {}) => {
  const isServerInserted = useRef(false);

  if (isServer() && !isServerInserted.current) {
    isServerInserted.current = true;
    const components = getServerUnistyles(settings);
    resetServerUnistyles();
    return components;
  }

  return;
};

export const Style = ({ children }: PropsWithChildren) => {
  const unistyles = useServerUnistyles();

  useServerInsertedHTML(() => unistyles);

  return children;
};
