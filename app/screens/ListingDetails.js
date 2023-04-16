import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import ListItem from "../components/ListItem";

function ListingDetails() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/beach.png")} />
      <View style={styles.container}>
        <Text style={styles.title}>Red Jacket for Sale</Text>
        <Text style={styles.price}>$99.2</Text>
        <ListItem
          image={require("../assets/dp.png")}
          title="Funny Guy"
          subtitle="4 Listings"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  container: {
    padding: 22,
  },
  price: {
    marginVertical: 8,
    color: "#4ecdc4",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default ListingDetails;
