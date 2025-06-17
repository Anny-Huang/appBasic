import React from "react";
import { Text, Pressable, StyleSheet, Linking } from "react-native";

interface Props {
  url: string;
}

const CityLink: React.FC<Props> = ({ url }) => {
  const handlePress = () => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <Pressable onPress={handlePress}>
      <Text style={styles.linkText}>Go to city page</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  linkText: {
    fontSize: 16,
    color: "#007AFF",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
});

export default CityLink;
