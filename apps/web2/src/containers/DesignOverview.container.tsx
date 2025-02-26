"use client";

import { useUnistyles } from "react-native-unistyles";

import { DesignOverviewComponent } from "../components/DesignOverview.component";

export const DesignOverviewContainer = () => {
  const { theme } = useUnistyles();

  return <DesignOverviewComponent theme={theme} />;
};
