import "~/libs/ui/theming/unistyles";

import { NavigationContainer } from "@react-navigation/native";
import React, { StrictMode, useRef } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";

import { Card, Container, Grid, Text } from "~/libs/ui/components";

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <StrictMode>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            ref={(ref) => {
              scrollViewRef.current = ref;
            }}
            style={styles.scrollView}
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
        </SafeAreaView>
      </NavigationContainer>
    </StrictMode>
  );
};
const styles = StyleSheet.create({
  appTitleText: {
    fontWeight: "500",
    paddingTop: 12,
  },
  codeBlock: {
    backgroundColor: "rgba(55, 65, 81, 1)",
    borderRadius: 4,
    marginVertical: 12,
    padding: 12,
  },
  comment: {
    color: "#cccccc",
  },
  connectToCloudButton: {
    backgroundColor: "rgba(20, 48, 85, 1)",
    borderRadius: 8,
    marginTop: 16,
    paddingVertical: 10,
    width: "50%",
  },
  connectToCloudButtonText: {
    color: "#ffffff",
  },
  hero: {
    backgroundColor: "#143055",
    borderRadius: 12,
    marginBottom: 24,
    padding: 36,
  },
  heroText: {
    color: "#ffffff",
    marginVertical: 12,
  },
  heroTitle: {
    flex: 1,
    flexDirection: "row",
  },
  heroTitleText: {
    color: "#ffffff",
    marginLeft: 12,
  },
  learning: {
    marginVertical: 12,
  },
  listItem: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  listItemTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  love: {
    justifyContent: "center",
    marginTop: 12,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomSm: {
    marginBottom: 6,
  },
  monospace: {
    color: "#ffffff",
    fontFamily: "Courier New",
    marginVertical: 4,
  },
  scrollView: {
    backgroundColor: "#ffffff",
  },
  section: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  shadowBox: {
    backgroundColor: "white",
    borderRadius: 24,
    marginBottom: 24,
    padding: 24,
    shadowColor: "black",
    shadowOffset: {
      height: 4,
      width: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  text2XS: {
    fontSize: 12,
  },
  textBold: {
    fontWeight: "500",
  },
  textCenter: {
    textAlign: "center",
  },
  textContainer: {
    marginVertical: 12,
  },
  textLg: {
    fontSize: 24,
  },
  textLight: {
    fontWeight: "300",
  },
  textMd: {
    fontSize: 18,
  },

  textSm: {
    fontSize: 16,
  },

  textSubtle: {
    color: "#6b7280",
  },
  textXL: {
    fontSize: 48,
  },
  textXS: {
    fontSize: 14,
  },
  whatsNextButton: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginTop: 24,
    paddingVertical: 16,
    width: "50%",
  },
});

export default App;
