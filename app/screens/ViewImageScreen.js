import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import ViewButton from "../components/ViewButton";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={38} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" size={38} />
      </View>
      <ViewButton
        style={styles.button}
        name="Login"
        onPress={() => {
          console.log("Pressed");
        }}
      />
      <Image
        resizeMode="center"
        style={styles.image}
        source={require("../assets/banana.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 70,
    left: 30,
    zIndex: 5,
  },
  deleteIcon: {
    position: "absolute",
    top: 70,
    right: 30,
    zIndex: 5,
  },
  button: {
    position: "absolute",
    top: 190,
  },
});

export default ViewImageScreen;
