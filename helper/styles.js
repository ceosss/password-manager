import { StyleSheet } from "react-native";
import colors from "./colors";
export default StyleSheet.create({
  headerText: {
    fontSize: 32,
    fontFamily: "bold",
  },
  normalText: {
    fontSize: 18,
    fontFamily: "thin",
  },
  smallText: {
    fontSize: 14,
    color: colors.darkGray,
    marginBottom: 5,
    textTransform: "uppercase",
    fontFamily: "bold",
  },
  link: {
    color: colors.purple,
    fontFamily: "bold",
  },
});
