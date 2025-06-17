import React, { useEffect, useState } from "react";
import credentials from "../lib/credentials.json";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";

interface LoginProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const SignInForm: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //   useEffect(() => {
  //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  //     if (!passwordRegex.test(password)) {
  //       console.log(
  //         "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
  //       );
  //       return;
  //     }
  //   }, [password]);

  const checkCredentials = () => {
    if (credentials) {
      // check if user exist
      const user = credentials.users.find(
        (cred) => cred.username === userName.trim()
      );
      if (!user) {
        Alert.alert("Error", "Username not found.");
        return;
      }

      // Check if password matches
      if (user.password !== password.trim()) {
        Alert.alert("Error", "Incorrect password.");
        return;
      }
      setIsLoggedIn(true);
    }
  };

  const handleLogin = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (userName.length < 5 && !passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "Username must be at least 5 characters long. Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
    if (userName.length < 5) {
      Alert.alert("Error", "Username must be at least 5 characters long.");
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    // If both validations pass, check the credentials
    checkCredentials();
  };

  return (
    <View style={styles.formStyle}>
      <View>
        <Text style={styles.title}>Sign In Form</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.labelStyles}>User Name:</Text>
        <TextInput
          placeholder="Please enter User Name"
          style={styles.inputFieldStyles}
          value={userName}
          onChangeText={setUserName}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.labelStyles}>Password:</Text>
        <TextInput
          placeholder="Please enter Password"
          style={styles.inputFieldStyles}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        ></TextInput>
      </View>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={{ textAlign: "center" }}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    minWidth: 320,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 30,
    fontFamily: "serif",
  },
  inputFieldStyles: {
    maxWidth: 230,
    minWidth: 200,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 2,
    fontFamily: "serif",
    color: "white",
  },
  labelStyles: { textAlign: "left", width: 70, color: "white" },
  title: {
    fontSize: 24,
    fontFamily: "serif",
    fontWeight: "bold",
    marginBottom: 35,
    color: "white",
  },
  formStyle: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    maxHeight: 320,
    padding: 15,
    // backgroundColor:"blue"
  },
  button: {
    width: 300,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    fontFamily: "serif",
  },
});

export default SignInForm;
