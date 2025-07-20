import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  infoText: {
    fontSize: 18,
    color: "black",
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  infoTextContainer: {
    backgroundColor: "lightblue",
    borderRadius: 10,
    padding: 15,
  },
  linkText: {
    fontSize: 20,
    color: "#007AFF",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
      greeting: {
    fontSize: 22,
    color: "white",
    marginVertical: 10,
  },
});

export default styles;
