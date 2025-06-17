import React from "react";
import { Text } from "react-native";
import styles from "./styles";

interface Props {
  info: string;
}

const CityDetails: React.FC<Props> = ({ info }) => {
  return <Text style={styles.infoText}>{info}</Text>;
};

export default CityDetails;
