import { ScrollView } from "react-native";

import { Container, Screen } from "~/libs/ui/src/components";

import { DesignOverviewContainer } from "../containers/DesignOverview.container";

export const DesignOverviewScreen = () => (
  <Screen>
    <ScrollView>
      <Container>
        <DesignOverviewContainer />
      </Container>
    </ScrollView>
  </Screen>
);
