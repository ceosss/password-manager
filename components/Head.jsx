import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import colors from "../helper/colors";
import Indicator from "./Indicator";
import { passwordAnalytics } from "../helper/passwordAnalytics";
import { firestore } from "../helper/firebase";
import Toast from "react-native-simple-toast";

const Head = ({ data, userEmail }) => {
  const [strong, setStrong] = useState(0);
  const [medium, setMedium] = useState(0);
  const [weak, setWeak] = useState(0);
  const [name, setName] = useState("");
  console.log("Head", data);
  useEffect(() => {
    if (data) {
      const analytics = passwordAnalytics(data);
      console.log(analytics);
      setStrong(analytics.strong);
      setMedium(analytics.medium);
      setWeak(analytics.weak);
    }
    if (userEmail) {
      firestore
        .collection("users")
        .doc(userEmail)
        .get()
        .then((doc) => setName(doc.data().name))
        .catch((error) => Toast.show(error.message));
    }
  }, [data]);
  return (
    <View style={styles.head}>
      <View style={styles.left}>
        {data ? (
          <Text style={styles.bigText}>{data.length}</Text>
        ) : (
          <ActivityIndicator
            size="large"
            color="white"
            style={{ padding: 20 }}
          />
        )}
        <Text style={styles.smallText}>Passwords</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.username}>Hi {name.slice(0, 19)}!</Text>
        <View style={styles.analytics}>
          <Indicator type="strong" />
          <Text style={styles.bold}>{strong}</Text>
          <Text style={styles.analyticsText}> Strong Passwords</Text>
        </View>
        <View style={styles.analytics}>
          <Indicator type="medium" />
          <Text style={styles.bold}>{medium}</Text>
          <Text style={styles.analyticsText}> Medium Passwords</Text>
        </View>
        <View style={styles.analytics}>
          <Indicator type="weak" />
          <Text style={styles.bold}>{weak}</Text>
          <Text style={styles.analyticsText}> Weak Passwords</Text>
        </View>
      </View>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
  },
  left: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.purple,
    borderBottomRightRadius: 30,
    elevation: 10,
    shadowColor: "#ccc",
    shadowOffset: { x: 2, y: 2 },
  },
  bigText: {
    fontSize: 42,
    fontFamily: "bold",
    color: "#fff",
  },
  smallText: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: "bold",
  },
  right: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 24,
  },
  username: {
    width: "68%",
    color: colors.darkGray,
    fontFamily: "bold",
    marginBottom: 10,
  },
  analytics: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    width: "68%",
  },
  analyticsText: {
    color: colors.darkGray,
    fontFamily: "regular",
    fontSize: 12,
  },
  bold: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export const data = {
  total: 94,
  strong: 82,
  medium: 8,
  weak: 4,
  username: "Swaraj",
};
