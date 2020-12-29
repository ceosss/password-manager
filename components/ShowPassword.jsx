import React, { useState } from "react";
import { StyleSheet, Text, ActivityIndicator, Clipboard } from "react-native";
import { firestore } from "../helper/firebase";
import { encodePassword } from "../helper/encodeDecodePassword";
import Toast from "react-native-simple-toast";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../helper/colors";
import Button from "./Button";
import Input from "./Input";

const ShowPassword = ({ refRBSheet, data, userEmail }) => {
  const [email, setEmail] = useState(data.email);
  const [originalEmail, setOriginalEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);
  const [originalPassword, setOriginalPassword] = useState(data.password);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);
  const copyToClipboard = () => {
    Clipboard.setString(data.password);
    Toast.show("Copied!");
  };
  const validate = () => {
    if (email.length < 3)
      return Toast.show(
        "Email must be at least 3 characters long., Try Again."
      );
    if (password.length < 3)
      return Toast.show(
        "Password must be at least 3 characters long., Try Again."
      );
    return 1;
  };
  const updatePassword = () => {
    if (validate() !== 1) return;
    setUpdating(true);
    firestore
      .collection("users")
      .doc(userEmail)
      .collection("savedPasswords")
      .doc(data.id)
      .update({ email, password: encodePassword(password) })
      .then(() => {
        Toast.show("Update Successful!");
        setUpdating(false);
      })
      .catch((error) => {
        Toast.show(error.message);
        setUpdating(false);
      });
  };
  const deletePassword = () => {
    setDeleting(true);
    firestore
      .collection("users")
      .doc(userEmail)
      .collection("savedPasswords")
      .doc(data.id)
      .delete()
      .then(() => {
        Toast.show("Deleted!");
        setDeleting(false);
      })
      .catch((error) => {
        Toast.show(error.message);
        setDeleting(false);
      });
  };
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      height={430}
      customStyles={{
        container: {
          alignItems: "center",
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Text style={styles.showPassword}>Show Password</Text>
      <Input type="website" text={data.website} disabled={true} />
      <Input type="email" text={email} setText={setEmail} />
      <Input type="password" text={password} setText={setPassword} />
      <Button onPress={copyToClipboard}>Copy Password</Button>
      {updating ? (
        <ActivityIndicator
          size="large"
          color={colors.purple}
          style={{ padding: 13 }}
        />
      ) : (
        <Button
          onPress={updatePassword}
          disabled={originalEmail === email && originalPassword === password}
        >
          Update Password
        </Button>
      )}
      {deleting ? (
        <ActivityIndicator
          size="large"
          color={colors.purple}
          style={{ padding: 13 }}
        />
      ) : (
        <Button onPress={deletePassword} type="delete">
          Delete Password
        </Button>
      )}
    </RBSheet>
  );
};

export default ShowPassword;

const styles = StyleSheet.create({
  showPassword: {
    fontSize: 18,
    fontFamily: "bold",
    textTransform: "uppercase",
    color: colors.purple,
    marginTop: 10,
  },
});
