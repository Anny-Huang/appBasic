import { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function IndexPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/(tabs)");
    }
  }, [isLoggedIn]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/food.jpg")}
        style={{ height: 300, width: "100%", resizeMode: "contain" }}
      />
      <SignInForm setIsLoggedIn={setIsLoggedIn} />
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
