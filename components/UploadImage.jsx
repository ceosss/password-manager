import React, { useState, useEffect } from "react";
import firebase, { firestore } from "../helper/firebase";
import { ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-simple-toast";
import Button from "./Button";
import colors from "../helper/colors";

const UploadImage = ({ email }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // (async () => {
    //   const {
    //     status,
    //   } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //   if (status !== "granted") {
    //     Toast.show("Sorry, we need camera roll permissions to make this work!");
    //   }
    // })();
  }, []);

  const pickImage = async () => {
    setLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });
    if (!result.cancelled) {
      uploadImage(result.uri);
    } else {
      setLoading(false);
    }
  };
  const deletePrevImage = (uri) => {
    if (profileImage) {
      firebase
        .storage()
        .refFromURL(profileImage)
        .delete()
        .then(() => uploadImage(uri))
        .catch((error) => {
          Toast.show(error.message);
          setLoading(false);
        });
    } else {
      uploadImage(uri);
    }
  };
  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    firebase
      .storage()
      .ref(`/users/${email}/profile-image/`)
      .put(blob)
      .then((response) => {
        blob.close();

        response.ref
          .getDownloadURL()
          .then((uri) => updateImageURLtoDatabase(uri));
      })
      .catch((error) => {
        Toast.show(error.message);
        setLoading(false);
      });
  };
  const updateImageURLtoDatabase = (uri) => {
    firestore
      .collection("users")
      .doc(email)
      .update({
        profileImage: uri,
      })
      .then(() => {
        Toast.show("Profile Photo Updated!");
        setLoading(false);
      })
      .catch((error) => {
        Toast.show(error.message);
        setLoading(false);
      });
  };
  return loading ? (
    <ActivityIndicator
      size="large"
      color={colors.purple}
      style={{ padding: 13 }}
    />
  ) : (
    <Button onPress={pickImage}>Update Profile Picture</Button>
  );
};

export default UploadImage;
