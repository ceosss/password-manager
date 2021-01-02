import AsyncStorage from "@react-native-async-storage/async-storage";
export const setFirstTime = async () => {
  try {
    await AsyncStorage.setItem("first-time", "no");
  } catch (e) {
    return -1;
  }
};
export const getFirstTime = async () => {
  try {
    const value = await AsyncStorage.getItem("first-time");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return -1;
  }
};
