import { createSwitchNavigator, createAppContainer } from "react-navigation";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const screens = {
  SignIn,
  SignUp,
};

const AuthNavigator = createSwitchNavigator(screens);
export default createAppContainer(AuthNavigator);
