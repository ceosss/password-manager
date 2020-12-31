import React, { useState, useEffect } from "react";
import AuthNavigation from "./navigation/AuthNavigator";
import Home from "./screens/Home";
import { auth } from "./helper/firebase";
import OnBoarding from "./screens/OnBoarding";

const Main = () => {
  const [curUser, setCurUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setCurUser(user);
      else setCurUser(null);
    });
  }, []);
  // if (curUser) return <Home />;
  return <OnBoarding />;
  // return <AuthNavigation />;
};

export default Main;
