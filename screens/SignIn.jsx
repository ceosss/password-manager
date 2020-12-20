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
import { auth } from "../helper/firebase";
import { validatePassword, ValidateEmail } from "../helper/validations";
import { storeData } from "../helper/getSetEmail";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const validate = () => {
    if (!ValidateEmail(email)) return Toast.show("Invalid Email, Try Again.");
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
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        storeData(email).then(() => Toast.show("Sign in Successful"));
        // setLoading(false);
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
        <Text style={[global.headerText, { color: "white" }]}>Sign in</Text>
        <Text style={[global.normalText, { color: "white", fontSize: 16 }]}>
          Login to your account
        </Text>
      </View>
      <View style={styles.card}>
        <Input type="email" text={email} setText={setEmail} />
        <Input type="password" text={password} setText={setPassword} />
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={colors.purple}
            style={{ padding: 13 }}
          />
        ) : (
          <Button onPress={handleSignIn}>SIGN IN</Button>
        )}
        <View style={styles.separate}>
          <View style={styles.line} />
          <Text style={styles.separateText}>OR</Text>
          <View style={styles.line} />
        </View>
        <SocialButton type="facebook" />
        <SocialButton type="google" />
      </View>
      <View style={styles.signUp}>
        <Text style={{ color: colors.darkGray, fontFamily: "light" }}>
          Don't you have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={global.link}> Sign up Now!</Text>
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
  forgot: {
    width: "100%",
    alignItems: "flex-end",
    marginVertical: 8,
  },
  forgotText: {
    fontSize: 13,
    fontFamily: "light",
    color: colors.darkGray,
  },
  separate: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 25,
  },
  separateText: {
    color: colors.darkGray,
    fontFamily: "bold",
  },
  line: {
    height: 1,
    width: "42%",
    backgroundColor: colors.gray,
  },
  signUp: {
    flexDirection: "row",
    marginTop: 30,
  },
});
