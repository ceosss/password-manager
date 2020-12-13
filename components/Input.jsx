import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import colors from "../helper/colors";

const Input = ({ type, text, setText }) => {
  const [showPW, togglePW] = useState(false);
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  return (
    <View style={styles.inputHolder}>
      <View style={styles.iconHolder}>{getIcon(type)}</View>
      <TextInput
        placeholder={type.capitalize()}
        onChangeText={(text) => setText(text)}
        value={text}
        secureTextEntry={type === "password" && !showPW}
        style={styles.inputStyle}
      />
      {type === "password" ? (
        <TouchableOpacity
          style={{ position: "absolute", right: 8 }}
          onPress={() => togglePW(!showPW)}
        >
          {showPW ? (
            <MaterialCommunityIcons
              name="eye"
              size={20}
              color={colors.purple}
            />
          ) : (
            <MaterialCommunityIcons name="eye" size={20} color={colors.gray} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputHolder: { flexDirection: "row", alignItems: "center" },
  iconHolder: {
    width: "15%",
    height: 45,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: colors.gray,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: -3,
  },
  inputStyle: {
    height: 45,
    width: "86%",
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 8,
    paddingLeft: 10,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    fontFamily: "regular",
  },
});
const getIcon = (type) => {
  switch (type) {
    case "name":
      return (
        <FontAwesome
          name="user"
          size={24}
          color={colors.gray}
          style={styles.inputIcon}
        />
      );
    case "email":
      return (
        <MaterialCommunityIcons
          name="email"
          size={24}
          color={colors.gray}
          style={styles.inputIcon}
        />
      );
    case "phone":
      return (
        <Ionicons
          name="phone-portrait-outline"
          size={24}
          color={colors.gray}
          style={styles.inputIcon}
        />
      );
    case "password":
      return (
        <Entypo
          name="key"
          size={24}
          color={colors.gray}
          style={styles.inputIcon}
        />
      );
  }
};
