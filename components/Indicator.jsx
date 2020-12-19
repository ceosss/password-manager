import React from "react";
import { StyleSheet, View } from "react-native";

const Indicator = ({ type }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case "strong":
        return "#42D083";
      case "medium":
        return "#F9C75B";
      case "weak":
        return "#F04754";
    }
  };
  return (
    <View
      style={[styles.indicator, { backgroundColor: getBackgroundColor() }]}
    />
  );
};

export default Indicator;

const styles = StyleSheet.create({
  indicator: {
    width: 7,
    height: 7,
    borderRadius: 50,
    marginRight: 5,
  },
});
