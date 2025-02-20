import { ScrollView } from "react-native";

import { Container, Screen } from "~/libs/ui/src/components";

import { HomeContainer } from "../containers/Home.container";

export const HomeScreen = () => (
  <Screen>
    <ScrollView>
      <Container>
        <HomeContainer />
      </Container>
    </ScrollView>
  </Screen>
);
