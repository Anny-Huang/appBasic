import { View, Text, Image, StyleSheet } from "react-native";
import CityDetails from "../../components/cityDetails";
import CityLink from "../../components/cityLink";

const cityInfo = `Edmonton is the capital city of Alberta, known for its expansive river valley park system, vibrant arts scene, and events like the Edmonton Fringe Festival. It’s also home to the famous West Edmonton Mall, one of the largest shopping malls in North America.`;

export default function Edmonton() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edmonton</Text>
      <Image
        source={require("../../assets/banff1.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <CityLink url="https://www.edmonton.ca/" />
      <View
        style={{ backgroundColor: "lightblue", borderRadius: 10, padding: 15 }}
      >
        <CityDetails info={cityInfo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
});
