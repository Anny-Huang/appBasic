import { View, Text, StyleSheet } from "react-native";

export default function WelcomeMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my new app!</Text>
      {/* <Text style={styles.subtitle}>Use the tabs below to explore cities.</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
});
