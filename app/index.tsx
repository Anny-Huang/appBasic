import { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { supabase } from "../lib/supabase";
import SignInForm from "../components/SignInForm";

export default function IndexPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data?.session;
      if (session && session.user) {
        setIsLoggedIn(true);
        router.replace("/(tabs)");
      } else {
        setIsLoading(false);
      }
    };
    checkSession();
  }, []);

  if (isLoading) return null;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/food.jpg")}
        style={styles.image}
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
  image: {
    height: 300,
    width: "100%",
    resizeMode: "contain",
  },
});
