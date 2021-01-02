import React, { useState, useEffect } from "react";
import AuthNavigation from "./navigation/AuthNavigator";
import Home from "./screens/Home";
import { auth } from "./helper/firebase";
import OnBoarding from "./screens/OnBoarding";
import { getFirstTime, setFirstTime } from "./helper/getSetFirstTimeUser";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Main = () => {
  const [curUser, setCurUser] = useState(null);
  const [firstTimeUser, setFirstTimeUser] = useState(false);
  useEffect(() => {
    getFirstTime().then((value) => {
      console.log(value);
      // AsyncStorage.removeItem("first-time");
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
  if (firstTimeUser) return <OnBoarding setFirstTimeUser={setFirstTimeUser} />;
  else {
    if (curUser) return <Home />;
    return <AuthNavigation />;
  }
};

export default Main;
