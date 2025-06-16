import { View, Text, Image, StyleSheet } from "react-native";

export default function EdmontonScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/banff1.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to Edmonton </Text>
      <Text style={styles.subtitle}>Go to city page</Text>
      <Text style={styles.info}>
      Edmonton is Alberta’s capital and a cultural hotspot packed with festivals, parks, and good vibes.
      It’s home to North America’s largest urban parkland and the epic West Edmonton Mall. 
      Locals are laid-back, creative, and love their city’s indie spirit. 
      Whether you're exploring the river valley, catching a show, or hunting for Northern Lights, Edmonton keeps things fresh, fun, and full of surprises. There's always something happening here.
      </Text>
    </View>
  );
}

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
