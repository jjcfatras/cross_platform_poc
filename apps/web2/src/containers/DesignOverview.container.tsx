"use client";

import { useStyles } from "react-native-unistyles";

import { DesignOverviewComponent } from "../components/DesignOverview.component";

export const DesignOverviewContainer = () => {
  const { theme } = useStyles();

  return <DesignOverviewComponent theme={theme} />;
};
