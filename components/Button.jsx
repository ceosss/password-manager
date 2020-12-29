import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../helper/colors";
import Ripple from "react-native-material-ripple";

const Button = ({ children, onPress, type, disabled }) => {
  return (
    <Ripple
      style={[
        styles.button,
        type === "delete"
          ? { backgroundColor: "#ee5253" }
          : disabled
          ? { backgroundColor: colors.neutralGray }
          : null,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Ripple>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: "100%",
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.purple,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  text: {
    color: "#fff",
    fontFamily: "bold",
    textTransform: "uppercase",
    fontSize: 17,
    letterSpacing: 1,
  },
});
