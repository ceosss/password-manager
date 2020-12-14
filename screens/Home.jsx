import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Toast from "react-native-simple-toast";
import { auth } from "../helper/firebase";

const Home = () => {
  const signOut = () => {
    auth
      .signOut()
      .then(() => Toast.show("Log out"))
      .catch((error) => Toast.show(error.message));
  };
  return (
    <View>
      <Text>HOME</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>LOG-OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
