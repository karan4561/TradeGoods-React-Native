import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  renderRightActions,
} from "react-native";

import colors from "../config/colors";
import { Swipeable } from "react-native-gesture-handler";

function ListItem({
  image,
  title,
  ImageComponent,
  subtitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{title}</Text>
            {subtitle && <Text style={styles.listing}>{subtitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 18,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  name: {
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 500,
    justifyContent: "center",
  },
  listing: {
    color: "#6e6969",
    fontSize: 18,
    marginVertical: 8,
  },
});

export default ListItem;
