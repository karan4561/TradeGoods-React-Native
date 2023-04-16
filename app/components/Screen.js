import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Constants from "expo-constants";
import { View } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.padding}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  padding: {
    padding: 20,
  },
});

export default Screen;
