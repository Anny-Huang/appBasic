import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  info: string;
}

const CityDetails: React.FC<Props> = ({ info }) => {
  return <Text style={styles.infoText}>{info}</Text>;
};

const styles = StyleSheet.create({
  infoText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    paddingHorizontal: 10,
  },
});

export default CityDetails;
