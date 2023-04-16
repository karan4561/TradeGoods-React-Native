import React, { useState } from "react";
import Screen from "../components/Screen";
import { Image, StyleSheet, Text } from "react-native";
import AppTextInput from "../components/AppTextInput";
import { Button } from "react-native";
import ViewButton from "../components/ViewButton";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <Image
              style={styles.icon}
              source={require("../assets/favicon.png")}
            />

            <AppTextInput
              icon="email"
              placeholder="Username"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            {errors.email && (
              <Text
                style={{
                  color: "red",
                  marginLeft: 5,
                  fontSize: 18,
                  marginBottom: 18,
                }}
              >
                {"*" + errors.email}
              </Text>
            )}
            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            {errors.password && (
              <Text
                style={{
                  color: "red",
                  marginLeft: 5,
                  fontSize: 18,
                  marginBottom: 18,
                }}
              >
                {"*" + errors.email}
              </Text>
            )}
            <ViewButton title="Login" onPress={handleSubmit} colour="tomato" />
          </>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
});

export default LoginScreen;
