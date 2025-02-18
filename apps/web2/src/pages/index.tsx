import { Card, Container, Grid, Screen, Text } from "~/libs/ui/src/components";

export default function Index() {
  return (
    <Screen>
      <Container hasHeader>
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
    </Screen>
  );
}
