import { useUnistyles } from "react-native-unistyles";

import { DesignOverviewComponent } from "../component/DesignOverview.component";

export const DesignOverviewContainer = () => {
  const { theme } = useUnistyles();

  return <DesignOverviewComponent theme={theme} />;
};
