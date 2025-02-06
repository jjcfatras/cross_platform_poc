"use client";
import { MMKV, Mode } from "react-native-mmkv";

export const storage = new MMKV({
  id: "mmkv-storage",
  mode: Mode.MULTI_PROCESS,
});
