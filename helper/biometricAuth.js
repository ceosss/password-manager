import * as LocalAuthentication from "expo-local-authentication";

export const checkForBiomtricAuth = async () => {
  let compatible = await LocalAuthentication.hasHardwareAsync();
  console.log("compatible", compatible);
  if (compatible) {
    return true;
  } else {
    return false;
  }
};

export const checkForBiometricRecords = async () => {
  let biometricRecords = await LocalAuthentication.isEnrolledAsync();
  console.log("biometricRecords", biometricRecords);
  if (biometricRecords) {
    return true;
  } else {
    return false;
  }
};

export const handleBiometricAuth = async () => {
  let result = await LocalAuthentication.authenticateAsync();
  console.log("BIO RESULT", result);
  if (result.success) {
    return true;
  } else {
    return false;
  }
};
