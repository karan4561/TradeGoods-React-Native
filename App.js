import React, { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import { View } from "react-native";
import ListingDetails from "./app/screens/ListingDetails";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}
