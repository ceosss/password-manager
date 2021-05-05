import React, { useState, useEffect } from "react";
import AuthNavigation from "./navigation/AuthNavigator";
import Home from "./screens/Home";
import { auth } from "./helper/firebase";
import OnBoarding from "./screens/OnBoarding";
import { isFirstTimeUser } from "./helper/getSetFirstTimeUser";
import { Image, View, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Main = () => {
  const [curUser, setCurUser] = useState(null);
  const [showOnboard, setShowOnboard] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    // AsyncStorage.removeItem("first-time");
    isFirstTimeUser().then((value) => {
      if (value == "yes") {
        setShowOnboard(true);
      } else {
        setShowOnboard(false);
        auth.onAuthStateChanged((user) => {
          if (user) setCurUser(user);
          else setCurUser(null);
        });
      }
    });
  }, [curUser]);
  setTimeout(() => {
    setLoader(false);
  }, 3000);

  if (loader)
    return (
      <View style={styles.shield}>
        <Image
          source={require("./assets/shield.gif")}
          resizeMode="center"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  else {
    if (showOnboard) return <OnBoarding setShowOnboard={setShowOnboard} />;
    else {
      if (curUser) return <Home />;
      return <AuthNavigation />;
    }
  }
};

export default Main;

const styles = StyleSheet.create({
  shield: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
