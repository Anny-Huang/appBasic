import React from "react";
import { View, Image, StyleSheet } from "react-native";
import SignInForm from "../components/SignInForm";

const SignInPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/food.jpg")}
        style={styles.image}
      />
      <SignInForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "contain",
  },
});

export default SignInPage;
