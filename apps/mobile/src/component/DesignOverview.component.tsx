import { Appearance, View } from "react-native";
import {
  StyleSheet,
  UnistylesRuntime,
  useUnistyles,
} from "react-native-unistyles";

import {
  BackButton,
  Button,
  Card,
  Divider,
  Grid,
  Text,
} from "~/libs/ui/src/components";

type DOComponentProps = {
  theme: ReturnType<typeof useUnistyles>["theme"];
};

export const DesignOverviewComponent = ({ theme }: DOComponentProps) => (
  <>
    <View
      style={[
        styles.row,
        { justifyContent: "center", marginTop: theme.spacing[4] },
      ]}
    >
      <BackButton style={styles.headerLeft} />
      <Text style={styles.header} type="h2">
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
            Appearance.setColorScheme("dark");
          }}
        >
          dark
        </Button>
        <Button
          onPress={() => {
            UnistylesRuntime.setAdaptiveThemes(false);
            UnistylesRuntime.setTheme("light");
            Appearance.setColorScheme("light");
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
        <Text type="h5">h5: Hello World</Text>
        <Text type="h6">h6: Hello World</Text>
        <Text>default: Hello World</Text>
        <Text type="italic">italic: Hello World</Text>
        <Text type="link">link: Hello World</Text>
        <Text type="strike">strike: Hello World</Text>
      </Card.Body>
    </Card>
    <Divider />
    <Card>
      <Card.Title>Sizing</Card.Title>
      <Card.Divider />
      <Card.Body>
        <Grid>
          {Object.keys(theme["sizing"]).map((size) => (
            <View
              key={size}
              style={[styles.row, { justifyContent: "space-evenly" }]}
            >
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
            <View
              key={color}
              style={[styles.row, { justifyContent: "space-evenly" }]}
            >
              <Text>{`${color}: `}</Text>
              <View
                style={[
                  styles.colorBlock(
                    theme["colors"][color as keyof (typeof theme)["colors"]],
                  ),
                ]}
              />
            </View>
          ))}
        </Grid>
      </Card.Body>
    </Card>
  </>
);

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
    left: theme.spacing[0],
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
