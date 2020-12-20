import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnBoarding = () => (
  <Onboarding
    pages={[
      {
        // backgroundColor: "#7280FB",
        backgroundColor: "#fff",
        image: (
          <Image
            source={require("../assets/undraw_Note_list_re_r4u9.png")}
            resizeMode="center"
          />
        ),
        title: "Save Easily",
        subtitle: "Save all your passwords securely at one place.",
      },
      {
        // backgroundColor: "#F9A826",
        backgroundColor: "#fff",
        image: (
          <Image
            source={require("../assets/undraw_cloud_sync_2aph.png")}
            resizeMode="center"
          />
        ),
        title: "Easy Access",
        subtitle: "Access all the securely saved passwords anytime.",
      },
      {
        // backgroundColor: "#33D9B2",
        backgroundColor: "#fff",
        image: (
          <Image
            source={require("../assets/undraw_Security_on_ff2u.png")}
            resizeMode="center"
          />
        ),
        title: "Generate Passwords",
        subtitle: "Generate highly secure custom passwords.",
      },
    ]}
  />
);

export default OnBoarding;
