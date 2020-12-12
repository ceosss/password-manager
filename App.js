import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import React from "react";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import Main from "./Main";

export default function App() {
  let [fontsLoaded] = useFonts({
    thin: Roboto_100Thin,
    light: Roboto_300Light,
    regular: Roboto_400Regular,
    bold: Roboto_500Medium,
  });
  if (!fontsLoaded) return <AppLoading />;
  return <Main />;
}
