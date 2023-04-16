import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import ViewButton from "../components/ViewButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/beach.png")}
    >
      <Image source={require("../assets/favicon.png")} style={styles.logo} />
      <Text style={styles.text}>Sell What You Dont Need</Text>
      <View style={styles.container}>
        <ViewButton title="Login" colour="#fc5c65" />
        <ViewButton title="Register" colour="#4ecdc4" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    padding: 15,
    width: "100%",
  },
  text: {
    position: "absolute",
    top: 190,
    color: "#FFF",
    fontSize: 25,
    fontWeight: 700,
  },
  logo: {
    height: 100,
    width: 100,
    position: "absolute",
    top: 80,
  },
});

export default WelcomeScreen;
