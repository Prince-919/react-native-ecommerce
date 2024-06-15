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

export const formHeading = {
  fontSize: 28,
  fontWeight: "500",
  textAlign: "center",
  backgroundColor: colors.dark,
  color: colors.white,
  padding: 5,
  borderRadius: 5,
};

export const inputOptions = {
  style: inputStyling,
  mode: "outlined",
  activeOutlineColor: colors.primary,
};

export const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 10,
  },
  forgetPassword: {
    color: colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: "flex-end",
    fontWeight: "100",
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 5,
    margin: 10,
  },
  or: {
    fontSize: 20,
    fontWeight: "100",
    color: colors.white,
    alignSelf: "center",
  },
  link: {
    fontSize: 18,
    color: colors.white,
    alignSelf: "center",
    textTransform: "uppercase",
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
