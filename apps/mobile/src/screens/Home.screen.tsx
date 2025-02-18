import { useRef } from "react";
import { ScrollView } from "react-native";

import { Card, Container, Grid, Screen, Text } from "~/libs/ui/src/components";

export const HomeScreen = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <Screen statusBarProps={{ type: "filled" }}>
      <ScrollView
        ref={(ref) => {
          scrollViewRef.current = ref;
        }}
      >
        <Container>
          <Grid>
            {Array.from({ length: 20 }, (_, index) => (
              <Card key={index}>
                <Card.Title>Hello World</Card.Title>
                <Card.SubTitle>Hello World</Card.SubTitle>
                <Card.Divider />
                <Card.Body>
                  <Text>Body text goes here</Text>
                </Card.Body>
              </Card>
            ))}
          </Grid>
        </Container>
      </ScrollView>
    </Screen>
  );
};
