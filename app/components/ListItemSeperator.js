import React from "react";
import { View, StyleSheet } from "react-native";

function ListItemSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
});

export default ListItemSeperator;
