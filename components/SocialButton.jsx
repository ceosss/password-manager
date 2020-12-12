import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const SocialButton = ({ type, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: type === "google" ? "#E85B43" : "#5171AF" },
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.iconHolder,
          { backgroundColor: type === "google" ? "#DB4F37" : "#3A5D9E" },
        ]}
      >
        {type === "google" ? (
          <Ionicons name="logo-google" size={24} color="#fff" />
        ) : (
          <Fontisto name="facebook" size={24} color="#fff" />
        )}
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.text}>
          {type === "google" ? "LOGIN WITH GOOGLE" : "LOGIN WITH FACEBOOK"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    elevation: 5,
    marginVertical: 8,
    borderRadius: 8,
  },
  textHolder: {
    width: "85%",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "bold",
    textTransform: "uppercase",
    fontSize: 17,
    letterSpacing: 1,
  },
  iconHolder: {
    width: "15%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
