import { View, Text } from "react-native";
import CityDetails from "../../components/cityDetails";

export default function Calgary() {
  const calgary = {
    name: "Calgary",
    image: require("../../assets/banff.jpg"),
    info: "Calgary is a vibrant city in Alberta, known for its beautiful parks, the famous Calgary Stampede, and proximity to the Rocky Mountains. It offers great outdoor activities and a thriving cultural scene.",
    url: "https://www.calgary.ca/home.html",
  };

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Welcome to our new app!
      </Text>
      <CityDetails city={calgary} />
    </View>
  );
}
