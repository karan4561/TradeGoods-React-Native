import React from "react";
import { View, StyleSheet, Image, Text, SafeAreaView } from "react-native";

export default function Card({ title, subTitle, image }) {
  return (
    <SafeAreaView style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 25,
    overflow: "hidden",
  },
  details: {
    padding: 22,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 6,
  },
  subTitle: {
    color: "green",
    fontWeight: "700",
    fontSize: 16,
    fontStyle: "italic",
  },
});
