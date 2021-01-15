import React, { useState, useEffect } from "react";
import AuthNavigation from "./navigation/AuthNavigator";
import Home from "./screens/Home";
import { auth } from "./helper/firebase";
import OnBoarding from "./screens/OnBoarding";
import { getFirstTime, setFirstTime } from "./helper/getSetFirstTimeUser";
import { Image, View, StyleSheet } from "react-native";

const Main = () => {
  const [curUser, setCurUser] = useState(null);
  const [firstTimeUser, setFirstTimeUser] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getFirstTime().then((value) => {
      if (value !== "no") {
        setFirstTime().then(() => setFirstTimeUser(true));
      } else {
        auth.onAuthStateChanged((user) => {
          if (user) setCurUser(user);
          else setCurUser(null);
        });
      }
    });
  }, []);
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
    // if (firstTimeUser)
    // return <OnBoarding setFirstTimeUser={setFirstTimeUser} />;
    // else {
    if (curUser) return <Home />;
    return <AuthNavigation />;
    // }
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
