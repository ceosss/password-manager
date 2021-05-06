import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Restart } from "fiction-expo-restart";
import Button from "./Button";
import global from "../helper/styles";

const BiometricAuthFailed = ({ biotmetricError }) => {
  const reloadApp = () => {
    Restart();
  };
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text
          style={[global.headerText, { textAlign: "center", fontSize: 70 }]}
        >
          😥
        </Text>
        <View style={{ height: 50 }} />
        <Text style={[global.headerText, { textAlign: "center" }]}>
          Biometric Authentication Failed
        </Text>
        <View style={{ height: 20 }} />
        <Text style={[global.normalText, { textAlign: "center" }]}>
          {biotmetricError == "lockout"
            ? "Too many failed attempts, to ensure the safety of your passwords, we have locked all your passwords. Please try again after some time."
            : ""}
        </Text>
        <View style={{ height: 50 }} />
        <Button onPress={reloadApp}>Try Again</Button>
      </View>
    </View>
  );
};

export default BiometricAuthFailed;

const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "90%",
  },
});
