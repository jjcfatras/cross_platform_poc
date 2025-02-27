import { useStyles } from "react-native-unistyles";

import { DesignOverviewComponent } from "../component/DesignOverview.component";

export const DesignOverviewContainer = () => {
  const { theme } = useStyles();

  return <DesignOverviewComponent theme={theme} />;
};
