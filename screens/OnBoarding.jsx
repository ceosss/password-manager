import React from "react";
import { Image, Text, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import colors from "../helper/colors";
import { notFirstTimeUser } from "../helper/getSetFirstTimeUser";

const OnBoarding = ({ setShowOnboard }) => {
  const done = async () => {
    console.log("DONE");
    await notFirstTimeUser();
    setShowOnboard(false);
  };
  return (
    <Onboarding
      pages={[
        {
          // backgroundColor: "#7280FB",
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/image1.png")}
              style={{ borderRadius: 10 }}
              resizeMode="center"
            />
          ),
          title: <Text></Text>,
          subtitle: <Text></Text>,
        },
        {
          // backgroundColor: "#F9A826",
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/image2.png")}
              style={{ borderRadius: 10 }}
              resizeMode="center"
            />
          ),
          title: <Text></Text>,
          subtitle: <Text></Text>,
        },
        {
          // backgroundColor: "#33D9B2",
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/image3.png")}
              style={{ borderRadius: 10 }}
              resizeMode="center"
            />
          ),
          title: <Text></Text>,
          subtitle: <Text></Text>,
        },
        {
          // backgroundColor: "#33D9B2",
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/image4.png")}
              style={{ borderRadius: 10 }}
              resizeMode="center"
            />
          ),
          title: <Text></Text>,
          subtitle: <Text></Text>,
        },
        {
          // backgroundColor: "#33D9B2",
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/image5.png")}
              style={{ borderRadius: 10 }}
              resizeMode="center"
            />
          ),
          title: <Text></Text>,
          subtitle: <Text></Text>,
        },
      ]}
      onDone={done}
      showSkip={false}
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
