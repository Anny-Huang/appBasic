import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import SignInForm from "./signin";
import WelcomeMessage from "./welcome";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/food.jpg")}
        style={{ height: 300, width: "100%", resizeMode: "contain" }}
      ></Image>
      {isLoggedIn ? (
        <WelcomeMessage />
      ) : (
        <SignInForm setIsLoggedIn={setIsLoggedIn} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
  },
 
});
