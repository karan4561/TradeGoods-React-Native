import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Red jacket for Sale",
    price: 100,
    image: require("../assets/jacket.png"),
  },
  {
    id: 2,
    title: "Scenery for Sale",
    price: 100,
    image: require("../assets/beach.png"),
  },
  {
    id: 3,
    title: "Banana for Sale",
    price: 100,
    image: require("../assets/banana.png"),
  },
];

function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "#E6E8EC",
  },
});

export default ListingScreen;
