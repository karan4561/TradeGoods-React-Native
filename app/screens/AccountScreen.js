import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { FlatList, StyleSheet, View } from "react-native";

import ListItemSeperator from "../components/ListItemSeperator";

import colors from "../config/colors";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen() {
  return (
    <Screen>
      <View style={styles.container1}>
        <ListItem
          title="Karan Aditte Singh"
          subtitle="karan.sachin.10@gmail.com"
          image={require("../assets/random2.jpg")}
        />
      </View>
      <View style={styles.container1}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container1}>
        <ListItem
          title="Log Out"
          ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "#F4F5F6",
    marginVertical: 20,
  },
});

export default AccountScreen;
