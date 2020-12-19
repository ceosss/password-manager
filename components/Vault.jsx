import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../helper/colors";
import Head from "./Head";
import Password from "./Password";

const Vault = () => {
  return (
    <View style={styles.vault}>
      <Head />
      <View style={styles.content}>
        <Text style={styles.saved}>SAVED PASSWORDS</Text>
        <View style={styles.password}>
          {data.map((data, _) => (
            <Password data={data} key={_} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Vault;

const styles = StyleSheet.create({
  vault: {
    width: "100%",
    alignItems: "center",
  },
  content: {
    width: "90%",
  },
  saved: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: "bold",
    marginVertical: 24,
  },
  password: {
    width: "100%",
  },
});

export const data = [
  {
    website: "Twitter",
    hashedPassword: "@124HdsdI#G",
  },
  {
    website: "Twitter",
    hashedPassword: "@124HdsdI#G",
  },
  {
    website: "Twitter",
    hashedPassword: "@124HdsdI#G",
  },
  {
    website: "Twitter",
    hashedPassword: "@124HdsdI#G",
  },
];
