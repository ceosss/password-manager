import AsyncStorage from "@react-native-async-storage/async-storage";
export const notFirstTimeUser = async () => {
  try {
    await AsyncStorage.setItem("first-time", "no");
  } catch (e) {
    return -1;
  }
};
export const isFirstTimeUser = async () => {
  try {
    const value = await AsyncStorage.getItem("first-time");
    if (value !== null) {
      return value;
    } else {
      return "yes";
    }
  } catch (e) {
    return "yes";
  }
};
