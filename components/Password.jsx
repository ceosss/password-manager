import React, { useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { passwordStrength } from "../helper/passwordStrength";
import { decodePassword } from "../helper/encodeDecodePassword";
import Indicator from "./Indicator";
import colors from "../helper/colors";
import ShowPassword from "./ShowPassword";

const Password = ({ data, userEmail }) => {
  const refRBSheet = useRef();
  console.log("password", data);
  data.password = decodePassword(data.password);
  return (
    <View style={styles.password}>
      <View style={[{ flexDirection: "row", alignItems: "center" }]}>
        <Indicator type={passwordStrength(data.password)} />
        <Text style={styles.website}>{data.website}</Text>
      </View>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <Ionicons
          name="md-arrow-forward"
          size={24}
          color={colors.neutralGray}
        />
      </TouchableOpacity>
      <ShowPassword refRBSheet={refRBSheet} data={data} userEmail={userEmail} />
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
