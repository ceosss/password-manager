import AsyncStorage from "@react-native-async-storage/async-storage";
export const storeData = async (email) => {
  try {
    await AsyncStorage.setItem("email", email);
  } catch (e) {
    return -1;
  }
};
export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("email");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return -1;
  }
};
