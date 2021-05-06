import * as LocalAuthentication from "expo-local-authentication";

export const checkForBiomtricAuth = async () => {
  let compatible = await LocalAuthentication.hasHardwareAsync();
  if (compatible) {
    return true;
  } else {
    return false;
  }
};

export const checkForBiometricRecords = async () => {
  let biometricRecords = await LocalAuthentication.isEnrolledAsync();
  if (biometricRecords) {
    return true;
  } else {
    return false;
  }
};

export const handleBiometricAuth = async () => {
  let result = await LocalAuthentication.authenticateAsync({
    disableDeviceFallback: true,
    fallbackLabel: "Retry",
    cancelLabel: "Cancel",
  });

  return result;
  // if (result.success) {
  //   return true;
  // } else {
  //   return false;
  // }
};
