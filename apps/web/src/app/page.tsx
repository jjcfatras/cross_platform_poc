"use client";
import "~/libs/ui/theming/unistyles";

import { Card, Container, Flex, Text } from "~/libs/ui/components";

export default function Index() {
  return (
    <Flex>
      <Container>
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
    </Flex>
  );
}
