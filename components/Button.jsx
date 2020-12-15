import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../helper/colors";

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 45,
    // width: "100%",
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.purple,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  text: {
    color: "#fff",
    fontFamily: "bold",
    textTransform: "uppercase",
    fontSize: 17,
    letterSpacing: 1,
  },
});