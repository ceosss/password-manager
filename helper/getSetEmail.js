import AsyncStorage from "@react-native-async-storage/async-storage";
export const storeEmail = async (email) => {
  try {
    await AsyncStorage.setItem("email", email);
  } catch (e) {
    return -1;
  }
};
export const retrieveEmail = async () => {
  try {
    const value = await AsyncStorage.getItem("email");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return -1;
  }
};
