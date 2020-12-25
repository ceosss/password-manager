import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Toast from "react-native-simple-toast";
import { firestore } from "../helper/firebase";
import colors from "../helper/colors";
import Button from "./Button";
import Input from "./Input";
import { retrieveEmail } from "../helper/getSetEmail";

const AddPassword = ({ refRBSheet }) => {
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (website.length < 3)
      return Toast.show(
        "Website must be at least 3 characters long., Try Again."
      );
    if (email.length < 3)
      return Toast.show(
        "Email must be at least 3 characters long., Try Again."
      );
    if (password.length < 3)
      return Toast.show(
        "Password must be at least 3 characters long., Try Again."
      );

    retrieveEmail().then((userEmail) =>
      firestore
        .collection("users")
        .doc(userEmail)
        .collection("savedPasswords")
        .add({
          website,
          email,
          password,
        })
        .then(() => {
          Toast.show("Done!");
          setWebsite("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => Toast.show(error.message))
    );
  };
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      height={315}
      customStyles={{
        container: {
          alignItems: "center",
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        draggableIcon: {},
      }}
    >
      <Text style={styles.addPassword}>Add a Password</Text>
      <Input type="website" text={website} setText={setWebsite} />
      <Input type="email" text={email} setText={setEmail} />
      <Input type="password" text={password} setText={setPassword} />
      <Button onPress={handleSubmit}>Add</Button>
    </RBSheet>
  );
};

export default AddPassword;

const styles = StyleSheet.create({
  addPassword: {
    fontSize: 18,
    fontFamily: "bold",
    textTransform: "uppercase",
    color: colors.purple,
    marginTop: 10,
  },
});
