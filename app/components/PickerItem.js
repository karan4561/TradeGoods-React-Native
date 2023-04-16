import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    padding: 20,
    marginVertical: 2,
  },
});

export default PickerItem;
