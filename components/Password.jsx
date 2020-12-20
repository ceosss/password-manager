import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Indicator from "./Indicator";
import { validatePassword } from "../helper/validations";
import colors from "../helper/colors";

const Password = ({ data }) => {
  const passwordHealth = () => {
    if (
      data.hashedPassword.length > 12 &&
      validatePassword(data.hashedPassword)
    )
      return "strong";
    if (
      data.hashedPassword.length >= 8 &&
      data.hashedPassword.length <= 12 &&
      validatePassword(data.hashedPassword)
    )
      return "medium";
    else return "weak";
  };
  return (
    <View style={styles.password}>
      <View style={[{ flexDirection: "row", alignItems: "center" }]}>
        <Indicator type={passwordHealth()} />
        <Text style={styles.website}>{data.website}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons
          name="md-arrow-forward"
          size={24}
          color={colors.neutralGray}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  password: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    marginVertical: 4,
    borderRadius: 10,
    elevation: 1,
  },
  website: {
    fontFamily: "regular",
  },
});
