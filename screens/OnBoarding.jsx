import React from "react";
import { Image, Text, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import colors from "../helper/colors";
import Main from "../Main";

const OnBoarding = ({ setFirstTimeUser }) => {
  const done = () => {
    setFirstTimeUser(false);
  };
  return (
    <Onboarding
      pages={[
        {
          // backgroundColor: "#7280FB",
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboarding1.png")}
              // resizeMode="center"
            />
          ),
          title: <Text style={styles.title}>Save Easily</Text>,
          subtitle: (
            <Text style={styles.subtitle}>
              Save all your passwords securely at one place.
            </Text>
          ),
        },
        {
          // backgroundColor: "#F9A826",
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboarding2.png")}
              // resizeMode="center"
            />
          ),
          title: <Text style={styles.title}>Easy Access</Text>,
          subtitle: (
            <Text style={styles.subtitle}>
              Access all the securely saved passwords anytime.
            </Text>
          ),
        },
        {
          // backgroundColor: "#33D9B2",
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboarding3.png")}
              // resizeMode="center"
            />
          ),
          title: <Text style={styles.title}>Generate Passwords</Text>,
          subtitle: (
            <Text style={styles.subtitle}>
              Generate highly secure custom passwords.
            </Text>
          ),
        },
      ]}
      onDone={done}
    />
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "bold",
    color: colors.purple,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "italic",
  },
});
