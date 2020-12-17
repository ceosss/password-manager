import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { auth } from "../helper/firebase";
import Toast from "react-native-simple-toast";

const Profile = () => {
  const signOut = () => {
    auth
      .signOut()
      .then(() => Toast.show("Log out"))
      .catch((error) => Toast.show(error.message));
  };
  return (
    <View>
      <Text>Profile</Text>
      <Text onPress={signOut}>LOG-OUT</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
