import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListDeleteActions({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color="#fff" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    width: 170,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListDeleteActions;
