import { Text, View, Pressable } from "react-native";

export default function WelcomeMessage() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "serif",
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        Welcome to my new app! 😊
      </Text>
    </View>
  );
}
