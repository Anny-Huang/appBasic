import { View, Text } from "react-native";
import CityDetails from "../../components/cityDetails";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Header from "../../components/Header";


export default function Calgary() {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) return;

      const { data, error: detailsError } = await supabase
        .from("user_details")
        .select("first_name, last_name")
        .eq("uuid", user.id)
        .single();

      if (!detailsError && data) {
        const full = `${data.first_name} ${data.last_name}`;
        setFullName(full);
      }
    };

    fetchUserName();
  }, []);

  const calgary = {
    name: "Calgary",
    image: require("../../assets/banff.jpg"),
    info: "Calgary is a vibrant city in Alberta, known for its beautiful parks, the famous Calgary Stampede, and proximity to the Rocky Mountains. It offers great outdoor activities and a thriving cultural scene.",
    url: "https://www.calgary.ca/home.html",
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Readiculous" showLogout />
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        {fullName ? `Welcome, ${fullName}!` : "Welcome to our new app!"}
      </Text>
      <CityDetails city={calgary} />
    </View>
  );
}
