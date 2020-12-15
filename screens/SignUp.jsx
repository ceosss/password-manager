import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";
import SocialButton from "../components/SocialButton";
import colors from "../helper/colors";
import global from "../helper/styles";
import Input from "../components/Input";
import Toast from "react-native-simple-toast";
import { firestore, auth } from "../helper/firebase";
import {
  validateName,
  validatePassword,
  ValidateEmail,
  validatePhone,
} from "../helper/validations";

const SignIn = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const validate = () => {
    if (!validateName(name))
      return Toast.show("Name must contain atleast 6 characters");
    if (!ValidateEmail(email)) return Toast.show("Invalid Email, Try Again.");
    if (!validatePhone(phone))
      return Toast.show("Invalid Phone Number, Try Again.");
    if (password !== confirmPassword)
      return Toast.show("Passwords didn't match, Try Again.");
    if (!validatePassword(password))
      return Toast.show(
        "Password must contain at least 8 characters, at least one number and both lower and uppercase letters and special characters, Try Again."
      );
    return 1;
  };
  const handleSignIn = () => {
    if (validate() !== 1) return;
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firestore
          .collection("users")
          .doc(email)
          .set({
            name,
            email,
            phone,
            password,
            createdAt: new Date(),
          })
          .then(() => {
            Toast.show("Sign up Successful");
            setLoading(false);
          })
          .catch((error) => {
            Toast.show(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        Toast.show(error.message);
        setLoading(false);
      });
  };
  return (
    <KeyboardAvoidingView
      style={styles.holder}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <Image
        source={require("../assets/PurpleArt.png")}
        style={{ position: "absolute", zIndex: 0, top: 0 }}
      />
      <View style={styles.top}>
        <Text style={[global.headerText, { color: "white" }]}>Sign up</Text>
        <Text style={[global.normalText, { color: "white", fontSize: 16 }]}>
          Create a new account
        </Text>
      </View>
      <View style={styles.card}>
        <Input type="name" text={name} setText={setName} />
        <Input type="email" text={email} setText={setEmail} />
        <Input type="phone" text={phone} setText={setPhone} />
        <Input type="password" text={password} setText={setPassword} />
        <Input
          type="Confirm Password"
          text={confirmPassword}
          setText={setConfirmPassword}
        />
        {loading ? (
          <ActivityIndicator
            size="large"
            color={colors.purple}
            style={{ padding: 13 }}
          />
        ) : (
          <Button onPress={handleSignIn}>SIGN UP</Button>
        )}
      </View>
      <View style={styles.signIn}>
        <Text style={{ color: colors.darkGray, fontFamily: "light" }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={global.link}> Sign in Now!</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  holder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    // marginTop: 40,
    marginBottom: 20,
    alignItems: "center",
  },
  card: {
    width: "92%",
    // height: "80%",
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
    padding: 15,
    paddingVertical: 25,
  },
  signIn: {
    flexDirection: "row",
    marginTop: 30,
  },
});
