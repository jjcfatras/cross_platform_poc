"use client";

import "~/libs/ui/src/theming/unistyles";

import { Card, Container, Screen, Text } from "~/libs/ui/src/components";

export default function Index() {
  return (
    <Screen>
      <Container hasHeader>
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
      </Container>
    </Screen>
  );
}
