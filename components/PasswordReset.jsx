import React, { useState } from "react";
import { StyleSheet, Text, ActivityIndicator } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Toast from "react-native-simple-toast";
import colors from "../helper/colors";
import Button from "./Button";
import Input from "./Input";
import { auth } from "../helper/firebase";
import { ValidateEmail } from "../helper/validations";

const PasswordReset = ({ forgotPasswordRef }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    if (!ValidateEmail(email)) return Toast.show("Invalid Email, Try Again.");
    setLoading(true);
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        Toast.show("Reset Link sent to your Email Id");
        setEmail("");
        setLoading(false);
        forgotPasswordRef.current.close();
      })
      .catch((error) => {
        Toast.show(error.message);
        setLoading(false);
      });
  };
  return (
    <RBSheet
      ref={forgotPasswordRef}
      closeOnDragDown={true}
      height={200}
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
      <Text style={styles.forgotPassword}>Forgot Password</Text>
      <Input type="email" text={email} setText={setEmail} />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.purple}
          style={{ padding: 13 }}
        />
      ) : (
        <Button onPress={handleSubmit}>Reset</Button>
      )}
    </RBSheet>
  );
};

export default PasswordReset;

const styles = StyleSheet.create({
  forgotPassword: {
    fontSize: 18,
    fontFamily: "bold",
    textTransform: "uppercase",
    color: colors.purple,
    marginTop: 10,
  },
});
