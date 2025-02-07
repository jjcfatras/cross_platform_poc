"use client";

import { Button, View } from "react-native";
import {
  StyleSheet,
  UnistylesRuntime,
  useUnistyles,
} from "react-native-unistyles";

import {
  BackButton,
  Card,
  Container,
  Divider,
  Screen,
  Text,
} from "~/libs/ui/components";

const DesignOverview = () => {
  const { theme } = useUnistyles();

  return (
    <Screen>
      <Container hasHeader={false}>
        <BackButton />
        <Text style={styles.header} type="h1">
          Design Overview
        </Text>
        <Divider />
        <Card>
          <Card.Title>Theme</Card.Title>
          <Card.Divider />
          <Card.Body style={[styles.row, { justifyContent: "space-evenly" }]}>
            <Button
              onPress={() => {
                UnistylesRuntime.setAdaptiveThemes(false);
                UnistylesRuntime.setTheme("dark");
              }}
              title="dark"
            />
            <Button
              onPress={() => {
                UnistylesRuntime.setAdaptiveThemes(false);
                UnistylesRuntime.setTheme("light");
              }}
              title="light"
            />
          </Card.Body>
        </Card>
        <Divider />
        <Card>
          <Card.Title>Text</Card.Title>
          <Card.Divider />
          <Card.Body>
            <Text type="h1">h1: Hello World</Text>
            <Text type="h2">h2: Hello World</Text>
            <Text type="h3">h3: Hello World</Text>
            <Text type="h4">h4: Hello World</Text>
            <Text>default: Hello World</Text>
            <Text type="italic">italic: Hello World</Text>
            <Text type="link">link: Hello World</Text>
          </Card.Body>
        </Card>
        <Divider />
        <Card>
          <Card.Title>Sizing</Card.Title>
          <Card.Divider />
          <Card.Body>
            <View style={styles.grid}>
              {Object.keys(theme["sizing"]).map((size) => (
                <View key={size} style={styles.row}>
                  <Text>
                    {`${
                      theme["sizing"][
                        Number(size) as keyof (typeof theme)["sizing"]
                      ]
                    }px: `}
                  </Text>
                  <View
                    style={styles.sizeBlock(
                      theme["sizing"][
                        Number(size) as keyof (typeof theme)["sizing"]
                      ],
                    )}
                  />
                </View>
              ))}
            </View>
          </Card.Body>
        </Card>
        <Divider />
        <Card>
          <Card.Title>colors</Card.Title>
          <Card.Divider />
          <Card.Body>
            <View style={styles.grid}>
              {Object.keys(theme["colors"]).map((color) => (
                <View key={color} style={styles.row}>
                  <Text>{`${color}: `}</Text>
                  <View
                    style={[
                      styles.colorBlock(
                        theme["colors"][
                          color as keyof (typeof theme)["colors"]
                        ],
                      ),
                    ]}
                  />
                </View>
              ))}
            </View>
          </Card.Body>
        </Card>
      </Container>
    </Screen>
  );
};

export default DesignOverview;

const styles = StyleSheet.create((theme) => ({
  colorBlock: (color: string) => ({
    backgroundColor: color,
    borderColor: theme.colors.brand,
    borderWidth: 2,
    height: 50,
    width: 50,
  }),
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.sizing[4],
  },
  header: {
    textAlign: "center",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  sizeBlock: (size: number) => ({
    alignItems: "center",
    backgroundColor: theme.colors.brand,
    height: size,
    justifyContent: "center",
    width: size,
  }),
}));
