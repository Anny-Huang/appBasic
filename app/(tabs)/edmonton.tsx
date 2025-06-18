import { View } from "react-native";
import CityDetails from "../../components/cityDetails";

export default function Edmonton() {
  const edmonton = {
    name: "Edmonton",
    image: require("../../assets/banff1.jpg"),
    info: "Edmonton is the capital city of Alberta, known for its expansive river valley park system, vibrant arts scene, and events like the Edmonton Fringe Festival. It’s also home to the famous West Edmonton Mall, one of the largest shopping malls in North America.",
    url: "https://www.edmonton.ca/",
  };
  return (
    <View style={{ flex: 1 }}>
      <CityDetails city={edmonton} />
    </View>
  );
}
