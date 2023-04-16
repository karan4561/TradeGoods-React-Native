import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListDeleteActions from "../components/ListDeleteActions";

const InitialMessage = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/random2.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/random1.jpg"),
  },
];

function MessageScreen() {
  const [messages, setMessages] = useState(InitialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListDeleteActions onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/random1.jpg"),
            },
            {
              id: 3,
              title: "T2",
              description: "D2",
              image: require("../assets/banana.png"),
            },
            {
              id: 4,
              title: "T2",
              description: "D2",
              image: require("../assets/jacket.png"),
            },
            {
              id: 5,
              title: "T2",
              description: "D2",
              image: require("../assets/splash.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
