import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Switch, Clipboard } from "react-native";
import Slider from "@react-native-community/slider";
import Toast from "react-native-simple-toast";
import Ripple from "react-native-material-ripple";
import Button from "../components/Button";
import colors from "../helper/colors";
import global from "../helper/styles";
import { generatePassword } from "../helper/generatePassword";

const Tools = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [number, toggleNumber] = useState(false);
  const [capital, toggleCapital] = useState(false);
  const [symbol, toggleSymbol] = useState(false);
  useEffect(() => {
    handleClick();
  }, []);
  const copyToClipboard = () => {
    Clipboard.setString(password);
    Toast.show("Copied!");
  };
  const handleClick = () => {
    setPassword(generatePassword(length, number, capital, symbol));
  };
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={[global.headerText, { fontFamily: "bolder" }]}>
          Generate Password
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.generated}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.smallText}>Generated Password</Text>
            <Text
              style={{
                fontFamily: "bolder",
                fontSize: 10,
                fontFamily: "light",
                marginLeft: 5,
                marginBottom: 3,
              }}
            >
              Tap to copy
            </Text>
          </View>
          <Ripple style={styles.preview} onPress={copyToClipboard}>
            <Text style={styles.previewText}>{password}</Text>
          </Ripple>
        </View>
        <View style={styles.length}>
          <Text style={styles.smallText}>Length: {length}</Text>
          <View style={styles.slider}>
            <Text style={[styles.minmax, styles.smallText]}>6</Text>
            <Slider
              style={styles.sliderStyle}
              minimumValue={6}
              maximumValue={24}
              minimumTrackTintColor={colors.purple}
              maximumTrackTintColor={colors.darkGray}
              thumbTintColor={colors.purple}
              step={1}
              value={length}
              onValueChange={(value) => setLength(value)}
            />
            <Text style={[styles.minmax, styles.smallText]}>24</Text>
          </View>
        </View>
        <View style={styles.setting}>
          <View style={styles.switch}>
            <Text style={styles.switchText}>Include Numbers</Text>
            <SwitchButton value={number} onChange={toggleNumber} />
          </View>
          <View style={styles.switch}>
            <Text style={styles.switchText}>Include Capital Letters</Text>
            <SwitchButton value={capital} onChange={toggleCapital} />
          </View>
          <View style={styles.switch}>
            <Text style={styles.switchText}>Include Symbols</Text>
            <SwitchButton value={symbol} onChange={toggleSymbol} />
          </View>
        </View>

        <Button style={styles.generate} onPress={handleClick}>
          <Text>Generate</Text>
        </Button>
      </View>
    </View>
  );
};

export default Tools;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  head: {
    marginTop: 30,
    marginBottom: 20,
  },
  content: { width: "100%" },
  length: {
    width: "90%",
  },
  smallText: {
    fontSize: 14,
    color: colors.darkGray,
    marginBottom: 5,
    textTransform: "uppercase",
    fontFamily: "bold",
  },
  preview: {
    width: "100%",
    marginBottom: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#e3e6fe",
    borderColor: colors.purple,
    borderWidth: 1,
  },
  previewText: {
    fontSize: 22,
    color: colors.purple,
    fontFamily: "bold",
  },
  length: { width: "100%", marginBottom: 4 },
  slider: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: colors.gray,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sliderStyle: { height: 40, width: "90%" },
  minmax: {
    justifyContent: "center",
  },
  switch: {
    width: "100%",
    // backgroundColor: colors.gray,
    borderColor: colors.gray,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  switchText: {
    fontFamily: "regular",
    color: colors.darkGray,
  },
});

export const SwitchButton = ({ value, onChange }) => {
  const handleChange = () => onChange((prev) => !prev);
  return (
    <Switch
      value={value}
      onValueChange={handleChange}
      trackColor={{ false: colors.gray, true: "#aab3fd" }}
      thumbColor={value ? colors.purple : "#f4f3f4"}
    />
  );
};
