import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../helper/colors";
import Head from "./Head";
import Password from "./Password";
import AddPassword from "./AddPassword";
import { firestore } from "../helper/firebase";
import { retrieveEmail } from "../helper/getSetEmail";
import PasswordSkeleton from "./PasswordSkeleton";
import Empty from "../assets/Empty";

const Vault = () => {
  const refRBSheet = useRef();
  const [vaultData, setVaultData] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    let unsubscribe;
    retrieveEmail().then((userEmail) => {
      setUserEmail(userEmail);
      unsubscribe = firestore
        .collection("users")
        .doc(userEmail)
        .collection("savedPasswords")
        .orderBy("createdAt", "desc")
        .onSnapshot((data) => {
          let array = [];
          data.docs.map((doc) => {
            array.push({ id: doc.id, ...doc.data() });
          });
          setVaultData(array);
        });
    });
    return () => unsubscribe();
  }, []);
  return (
    <View style={styles.vault}>
      <Head data={vaultData} userEmail={userEmail} />
      <View style={styles.content}>
        <Text style={styles.saved}>SAVED PASSWORDS</Text>
        <View style={styles.password}>
          {vaultData === null ? (
            <PasswordSkeleton />
          ) : vaultData.length ? (
            <FlatList
              data={vaultData}
              renderItem={({ item }) => (
                <Password data={item} userEmail={userEmail} />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Empty />
          )}
        </View>
      </View>
      <TouchableOpacity
        style={styles.add}
        onPress={() => refRBSheet.current.open()}
      >
        <AntDesign name="pluscircle" size={52} color={colors.purple} />
      </TouchableOpacity>
      <AddPassword refRBSheet={refRBSheet} />
    </View>
  );
};

export default Vault;

const styles = StyleSheet.create({
  vault: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  content: {
    width: "90%",
  },
  saved: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: "bold",
    marginVertical: 24,
  },
  password: {
    marginBottom: "85%",
  },
  add: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
});
