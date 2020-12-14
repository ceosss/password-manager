import React, { useState, useEffect } from "react";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import { auth } from "./helper/firebase";

const Main = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
    });
  }, [user]);
  if (user) return <Home />;
  return <SignIn />;
};

export default Main;
