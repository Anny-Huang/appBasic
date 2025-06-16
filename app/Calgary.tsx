import { View, Text, Image, StyleSheet } from "react-native";

export default function CalgaryScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/banff.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to Calgary </Text>
      <Text style={styles.info}>
      Calgary is a sunny, energetic city with a western vibe and big heart.
        Whether you're into festivals, tech, or hiking adventures, Calgary's got something for everyone — all with a backdrop of sweeping prairie skies and a touch of cowboy charm.
      </Text>
  );

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#bbb",
    fontSize: 16,
    marginVertical: 8,
  },
  info: {
    color: "#ccc",
    fontSize: 14,
    textAlign: "center",
  },
});
