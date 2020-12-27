import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { auth, firestore } from "../helper/firebase";
import Toast from "react-native-simple-toast";
import global from "../helper/styles";
import Ripple from "react-native-material-ripple";
import colors from "../helper/colors";
import Input from "./Input";
import Button from "./Button";
import { retrieveEmail } from "../helper/getSetEmail";
import { validateName, validatePhone } from "../helper/validations";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    retrieveEmail().then((mail) => {
      setEmail(mail);
      firestore
        .collection("users")
        .doc(mail)
        .onSnapshot((doc) => {
          const data = doc.data();
          console.log(data);
          setName(data.name);
          setPhone(data.phone);
          setLoading(false);
        });
    });
  }, []);
  const validate = () => {
    if (!validateName(name))
      return Toast.show("Name must contain at least 6 characters");
    if (!validatePhone(phone))
      return Toast.show("Invalid Phone Number, Try Again.");
    return 1;
  };
  const update = () => {
    if (validate() !== 1) return;
    setLoading(true);
    firestore
      .collection("users")
      .doc(email)
      .update({
        email,
        name,
        phone,
      })
      .then(() => {
        Toast.show("Updated!");
        setLoading(false);
      })
      .catch((error) => {
        Toast.show(error.message);
        setLoading(false);
      });
  };
  const signOut = () => {
    auth
      .signOut()
      .then(() => Toast.show("Log out"))
      .catch((error) => Toast.show(error.message));
  };
  return (
    <View style={styles.profile}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={global.headerText}>Profile</Text>
          <Ripple onPress={signOut}>
            <Text style={styles.logout}>LOG-OUT</Text>
          </Ripple>
        </View>
        <View style={styles.userImage}>
          <Image source={require("../assets/user.png")} style={styles.image} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Input type="email" text={email} disabled />
        <Input type="name" text={name} setText={setName} />
        <Input type="phone" text={phone} setText={setPhone} />
        {loading ? (
          <ActivityIndicator
            size="large"
            color={colors.purple}
            style={{ padding: 13 }}
          />
        ) : (
          <Button onPress={update}>Update</Button>
        )}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginVertical: 32,
  },
  content: {
    width: "90%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logout: {
    color: "#ee5253",
    fontFamily: "bold",
  },
  userImage: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.purple,
    borderWidth: 5,
  },
  image: {
    width: 58,
    height: 58,
  },
  name: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: "bold",
    color: colors.darkGray,
  },
  email: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: "regular",
    marginBottom: 30,
  },
});
