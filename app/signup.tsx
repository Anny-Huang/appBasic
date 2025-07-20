//npx expo install @supabase/supabase-js
import { StackActions } from '@react-navigation/native';
import { useFocusEffect } from "@react-navigation/native";

import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { supabase } from "../lib/supabase";
import { router } from "expo-router";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
    Alert.alert("Error", "Please enter a valid email address.");
    return;
}

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }
    console.log("🚀 Sending signup request...");
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: password.trim(),
    });
    console.log("📬 Supabase signup response:", data);
    console.log("❌ Supabase signup error:", error);
    if (error) {
      Alert.alert("Signup failed", error.message);
      return;
    }

    const userId = data.user?.id ?? data.session?.user.id;
    if (!userId) {
      Alert.alert("Signup failed", "No user ID available.");
      return;
    }

    // please do remember that I added "created_at" column to the user_details table
    // and it is automatically set by Supabase
    // so we don't need to set it manually here
    // Insert user details into the user_details table
    const { error: insertError } = await supabase
      .from("user_details")
      .insert({
        uuid: userId,
        first_name: firstName,
        last_name: lastName,
        email: email.trim(),
      });

    if (insertError) {
  Alert.alert("Signup failed: could not save user info", insertError.message);
  return;
}

    Alert.alert("Success", "Account created! Please log in.");
    router.replace("/");

  };

  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputGroup}>
        <Text>First Name:</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Last Name:</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>
      <Pressable style={styles.button} onPress={handleSignUp}>
        <Text style={{ textAlign: "center" }}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  formStyle: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
