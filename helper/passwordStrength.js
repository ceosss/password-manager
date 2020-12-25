import { validatePassword } from "./validations";
export const passwordStrength = (password) => {
  if (password.length > 12 && validatePassword(password)) return "strong";
  if (
    password.length >= 8 &&
    password.length <= 12 &&
    validatePassword(password)
  )
    return "medium";
  else return "weak";
};
