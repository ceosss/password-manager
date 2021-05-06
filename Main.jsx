import React, { useState, useEffect } from "react";
import AuthNavigation from "./navigation/AuthNavigator";
import Home from "./screens/Home";
import { auth } from "./helper/firebase";
import OnBoarding from "./screens/OnBoarding";
import { isFirstTimeUser } from "./helper/getSetFirstTimeUser";
import { Image, View, StyleSheet } from "react-native";
import {
  checkForBiomtricAuth,
  checkForBiometricRecords,
  handleBiometricAuth,
} from "./helper/biometricAuth";
import BiometricFailedScreen from "./components/BiometricFailedScreen";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Main = () => {
  const [curUser, setCurUser] = useState(null);
  const [showOnboard, setShowOnboard] = useState(false);
  const [compatible, setCompatible] = useState(false);
  const [records, setRecords] = useState(false);
  const [failed, setfailed] = useState(false);
  const [biotmetricError, setBiotmetricError] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    // AsyncStorage.removeItem("first-time");
    startupChecks();
  }, []);

  const startupChecks = async () => {
    var compatible = await checkForBiomtricAuth();
    if (compatible) {
      setCompatible(true);
      var records = await checkForBiometricRecords();
      if (records) {
        setRecords(true);
      }
    }
    isFirstTimeUser().then((value) => {
      if (value == "yes") {
        setLoader(false);
        setShowOnboard(true);
      } else {
        setShowOnboard(false);
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            if (compatible && records) {
              const result = await handleBiometricAuth();

              if (result.success) {
                setCurUser(user);
                setLoader(false);
              } else {
                setBiotmetricError(result.error);
                setfailed(true);
              }
            } else {
              setCurUser(user);
              setLoader(false);
            }
          } else {
            setCurUser(null);
            setLoader(false);
          }
        });
      }
    });
  };

  if (failed) {
    return <BiometricFailedScreen biotmetricError={biotmetricError} />;
  } else if (loader) {
    return (
      <View style={styles.shield}>
        <Image
          source={require("./assets/shield.gif")}
          resizeMode="center"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  } else {
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
