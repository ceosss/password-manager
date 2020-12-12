import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";
import SocialButton from "../components/SocialButton";
import colors from "../helper/colors";
import global from "../helper/styles";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const SignIn = () => {
  return (
    <View style={styles.holder}>
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
        <View style={styles.inputHolder}>
          <View style={styles.iconHolder}>
            <FontAwesome
              name="user"
              size={24}
              color={colors.gray}
              style={styles.inputIcon}
            />
          </View>
          <TextInput placeholder="E-mail" style={styles.inputStyle} />
        </View>
        <View style={styles.inputHolder}>
          <View style={styles.iconHolder}>
            <Entypo
              name="key"
              size={24}
              color={colors.gray}
              style={styles.inputIcon}
            />
          </View>

          <TextInput
            placeholder="Password"
            accessibilityElementsHidden={true}
            style={styles.inputStyle}
          />
        </View>
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button>SIGN IN</Button>
        <View style={styles.separate}>
          <View style={styles.line} />
          <Text style={styles.separateText}>OR</Text>
          <View style={styles.line} />
        </View>
        <SocialButton type="facebook" />
        <SocialButton type="google" />
      </View>
      <View style={styles.signUp}>
        <Text>Don't you have an account?</Text>
        <Text>Sign up Now!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
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
    backgroundColor: "#f0f0f0",
    elevation: 5,
    padding: 15,
    paddingVertical: 25,
  },
  inputHolder: { flexDirection: "row", alignItems: "center" },
  iconHolder: {
    width: "15%",
    height: 45,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: colors.gray,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: -3,
  },
  inputStyle: {
    height: 45,
    width: "86%",
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 8,
    paddingLeft: 10,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
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
