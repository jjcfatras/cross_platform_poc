/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { UnistylesRegistry } from "react-native-unistyles";

import { breakpoints } from "./_constants";
import { darkTheme, lightTheme } from "./themes";

// if you defined breakpoints
type AppBreakpoints = typeof breakpoints;

// if you defined themes
type AppThemes = {
  dark: typeof darkTheme;
  light: typeof lightTheme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    dark: darkTheme,
    light: lightTheme,
    // register other themes with unique names
  })
  .addConfig({
    // you can pass here optional config described below
    // adaptiveThemes: true,
    initialTheme: "light",
  });
