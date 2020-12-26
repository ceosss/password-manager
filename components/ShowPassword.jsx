import React from "react";
import { StyleSheet, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../helper/colors";
import Button from "./Button";
import Input from "./Input";

const ShowPassword = ({ refRBSheet, data }) => {
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      height={260}
      customStyles={{
        container: {
          alignItems: "center",
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        draggableIcon: {},
      }}
    >
      <Text style={styles.showPassword}>Show Password</Text>
      <Input type="website" text={data.website} disabled={true} />
      <Input type="email" text={data.email} disabled={true} />
      <Input type="password" text={data.password} disabled={true} />
      {/* {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.purple}
          style={{ padding: 13 }}
        />
      ) : (
        <Button onPress={handleSubmit}>Add</Button>
      )} */}
    </RBSheet>
  );
};

export default ShowPassword;

const styles = StyleSheet.create({
  showPassword: {
    fontSize: 18,
    fontFamily: "bold",
    textTransform: "uppercase",
    color: colors.purple,
    marginTop: 10,
  },
});
