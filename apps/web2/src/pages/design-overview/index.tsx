"use client";

import { View } from "react-native";
import {
  StyleSheet,
  UnistylesRuntime,
  useUnistyles,
} from "react-native-unistyles";

import {
  BackButton,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Screen,
  Text,
} from "~/libs/ui/components";

const DesignOverview = () => {
  const { theme } = useUnistyles();

  return (
    <Screen>
      <Container hasHeader={false}>
        <View style={[styles.row, { justifyContent: "center" }]}>
          <View style={styles.headerLeft}>
            <BackButton />
          </View>
          <Text style={styles.header} type="h1">
            Design Overview
          </Text>
        </View>

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
            >
              dark
            </Button>
            <Button
              onPress={() => {
                UnistylesRuntime.setAdaptiveThemes(false);
                UnistylesRuntime.setTheme("light");
              }}
            >
              light
            </Button>
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
            <Grid>
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
            </Grid>
          </Card.Body>
        </Card>
        <Divider />
        <Card>
          <Card.Title>colors</Card.Title>
          <Card.Divider />
          <Card.Body>
            <Grid>
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
            </Grid>
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
  header: {
    textAlign: "center",
  },
  headerLeft: {
    left: theme.spacing[4],
    position: "absolute",
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
