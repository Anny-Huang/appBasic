import { View, Text, Image, StyleSheet } from "react-native";
import CityDetails from "../../components/cityDetails";
import CityLink from "../../components/cityLink";

const cityInfo = `Calgary is a vibrant city in Alberta, known for its beautiful parks, the famous Calgary Stampede, and proximity to the Rocky Mountains. It offers great outdoor activities and a thriving cultural scene.`;

export default function Calgary() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calgary</Text>
      <Image
        source={require("../../assets/banff.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <CityLink url="https://www.calgary.ca/home.html" />
      <View style={{backgroundColor:'lightblue', borderRadius:10, padding: 15,}}>
        <CityDetails info={cityInfo}/>
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
