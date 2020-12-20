import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../helper/colors";
import Head from "./Head";
import Password from "./Password";
import AddPassword from "./AddPassword";

const Vault = () => {
  const refRBSheet = useRef();
  return (
    <View style={styles.vault}>
      <Head />
      <View style={styles.content}>
        <Text style={styles.saved}>SAVED PASSWORDS</Text>
        <View style={styles.password}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Password data={item} />}
            keyExtractor={(item, index) => "key" + index}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.add}
        onPress={() => refRBSheet.current.open()}
      >
        <AntDesign name="pluscircle" size={52} color={colors.purple} />
      </TouchableOpacity>
      <AddPassword refRBSheet={refRBSheet} />
    </View>
  );
};

export default Vault;

const styles = StyleSheet.create({
  vault: {
    width: "100%",
    height: "100%",
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
    marginBottom: "85%",
  },
  add: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
});

export const data = [
  {
    website: "Twitter",
    hashedPassword: "Afnet@1234123",
  },
  {
    website: "Twitter",
    hashedPassword: "Afnet@1234@2asdas",
  },
  {
    website: "Twitter",
    hashedPassword: "@124HdsdI#G",
  },
  {
    website: "Twitter",
    hashedPassword: "abcdefghasdas",
  },
  {
    website: "Twitter",
    hashedPassword: "Afnet@1234123",
  },
  {
    website: "Twitter",
    hashedPassword: "Afnet@1234@2asdas",
  },
  {
    website: "Twitter",
    hashedPassword: "@124HdsdI#G",
  },
  {
    website: "Twitter",
    hashedPassword: "abcdefghasdas",
  },
  {
    website: "Twitter",
    hashedPassword: "Afnet@1234123",
  },
  {
    website: "Twitter",
    hashedPassword: "Afnet@1234@2asdas",
  },
  {
    website: "Twitter",
    hashedPassword: "@124HdsdI#G",
  },
  {
    website: "Twitter",
    hashedPassword: "abcdefghasdas",
  },
  {
    website: "Twitter",
    hashedPassword: "Afnet@1234123",
  },
  {
    website: "Twitter",
    hashedPassword: "Afnet@1234@2asdas",
  },
  {
    website: "Facebook",
    hashedPassword: "@124HdsdI#G",
  },
  {
    website: "Twitter",
    hashedPassword: "abcdefghasdas",
  },
  {
    website: "Twitter",
    hashedPassword: "Afnet@1234123",
  },
  {
    website: "Twitter",
    hashedPassword: "Afnet@1234@2asdas",
  },
  {
    website: "Twitter",
    hashedPassword: "@124HdsdI#G",
  },
  {
    website: "Facebook",
    hashedPassword: "abcdefghasdas",
  },
];
