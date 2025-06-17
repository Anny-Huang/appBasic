import React from "react";
import { Text, Pressable, Linking } from "react-native";
import styles from "./styles";

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

export default CityLink;
