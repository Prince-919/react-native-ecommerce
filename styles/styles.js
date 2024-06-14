import { StyleSheet, StatusBar, Platform } from "react-native";

export const colors = {
  primary: "#c70049",
  pink: "rgb(227, 25, 99)",
  darkPink: "rgba(199,0, 73, 0.8)",
  white: "white",
  dark: "rgb(45, 45,45)",
  transparent: "transparent",
  lightGray: "#f2f2f2",
  lightGray2: "#f7f7f7",
};

export const defaultStyle = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.white,
});
export const inputStyling = StyleSheet.create({
  height: 50,
  backgroundColor: colors.white,
  marginVertical: 10,
  marginHorizontal: 20,
});
