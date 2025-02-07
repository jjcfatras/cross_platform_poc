import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Card, Container, Screen, Text } from "~/libs/ui/components";

export default function Index() {
  return (
    <Screen>
      <Container hasHeader>
        <View style={styles.grid}>
          <Card>
            <Card.Title>Hello World</Card.Title>
            <Card.SubTitle>Hello World</Card.SubTitle>
            <Card.Divider />
            <Card.Body>
              <Text>Body text goes here</Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Hello World</Card.Title>
            <Card.SubTitle>Hello World</Card.SubTitle>
            <Card.Divider />
            <Card.Body>
              <Text>Body text goes here</Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Hello World</Card.Title>
            <Card.SubTitle>Hello World</Card.SubTitle>
            <Card.Divider />
            <Card.Body>
              <Text>Body text goes here</Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Hello World</Card.Title>
            <Card.SubTitle>Hello World</Card.SubTitle>
            <Card.Divider />
            <Card.Body>
              <Text>Body text goes here</Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Hello World</Card.Title>
            <Card.SubTitle>Hello World</Card.SubTitle>
            <Card.Divider />
            <Card.Body>
              <Text>Body text goes here</Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Hello World</Card.Title>
            <Card.SubTitle>Hello World</Card.SubTitle>
            <Card.Divider />
            <Card.Body>
              <Text>Body text goes here</Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Hello World</Card.Title>
            <Card.SubTitle>Hello World</Card.SubTitle>
            <Card.Divider />
            <Card.Body>
              <Text>Body text goes here</Text>
            </Card.Body>
          </Card>
        </View>
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create(() => ({
  grid: {
    flexDirection: {
      xs: "column",
      // eslint-disable-next-line perfectionist/sort-objects
      md: "row",
    },
    flexWrap: "wrap",
  },
}));
