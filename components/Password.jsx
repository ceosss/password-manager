import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Indicator from "./Indicator";

const Password = ({ data }) => {
  return (
    <View style={styles.password}>
      <View style={[{ flexDirection: "row", alignItems: "center" }]}>
        <Indicator type="medium" />
        <Text style={styles.website}>{data.website}</Text>
      </View>
      <MaterialIcons name="content-copy" size={24} color="black" />
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
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    marginVertical: 5,
    borderRadius: 10,
    elevation: 1,
  },
  website: {},
});
