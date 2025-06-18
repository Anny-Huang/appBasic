import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import CityLink from "./cityLink";

interface CityDetailsProps {
  city: {
    name: string;
    image: any;
    info: string;
    url: string;
  };
}

const CityDetails: React.FC<CityDetailsProps> = ({ city }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{city.name}</Text>
      <Image source={city.image} style={styles.image} resizeMode="cover" />
      <CityLink url={city.url} />
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoText}>{city.info}</Text>
      </View>
    </View>
  );
};

export default CityDetails;
