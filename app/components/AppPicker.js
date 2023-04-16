import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Button,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import { Modal } from "react-native";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
  items,
  selectedItem,
  onSelectItem,
  icon,
  placeholder,
  ...otherProps
}) {
  const [ViewModal, SetViewModal] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => SetViewModal(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons name={icon} style={styles.icon} size={25} />
          )}
          <Text style={{ flex: 1, fontSize: 20 }}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          {icon && <MaterialCommunityIcons name="chevron-down" size={25} />}
          <TextInput style={styles.text} {...otherProps} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={ViewModal} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => SetViewModal(false)} />
          <FlatList
            data={items}
            keyExtractor={(items) => items.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  SetViewModal(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    width: "100%",
  },
  text: {
    fontSize: 20,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
