import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import colors from "../helper/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import Clipboard from "@react-native-community/clipboard";
import Toast from "react-native-simple-toast";

const Tools = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("asdasdasd");
  const copyToClipboard = () => {
    Clipboard.setString("password");
    Toast.show("Copied!");
  };
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text>Generate Password</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity className="preview" onPress={copyToClipboard}>
          <Text>{password}</Text>
        </TouchableOpacity>
        <View className="length">
          <Text>Length</Text>
          <View className="slider">
            <Text className="min">6</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={6}
              maximumValue={32}
              minimumTrackTintColor={colors.purple}
              maximumTrackTintColor="#000000"
              value={length}
              onValueChange={(value) => setLength(value)}
            />
          </View>
          <Text className="max">32</Text>
        </View>
        <View className="setting">
          <View className="numbers">
            <Text>Include Numbers</Text>
          </View>
          <View className="capital">
            <Text>Include Capital Letters</Text>
          </View>
          <View className="symbol">
            <Text>Include Symbols</Text>
          </View>
        </View>

        <TouchableOpacity className="generate">
          <Text>Generate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tools;

const styles = StyleSheet.create({
  length: {
    width: "90%",
  },
});
