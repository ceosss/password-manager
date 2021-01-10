import React from "react";
import { Platform, ToastAndroid } from "react-native";
import SnackBar from "react-native-snackbar-component";

export default notify = (message) => {
  if (Platform.OS === "android") {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    <SnackBar visible={true} textMessage={message} actionText="let's go" />;
  }
};
