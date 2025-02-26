import { ScrollView } from "react-native";

import { Container, Screen } from "~/libs/ui/src/components";

import { DesignOverviewComponent } from "../component/DesignOverview.component";

export const DesignOverviewScreen = () => (
  <Screen>
    <ScrollView>
      <Container>
        <DesignOverviewComponent />
      </Container>
    </ScrollView>
  </Screen>
);
