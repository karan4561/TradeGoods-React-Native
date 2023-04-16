import React from "react";
import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

function ViewButton({ title, onPress, colour }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colour }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "tomato",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginBottom: 40,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default ViewButton;
