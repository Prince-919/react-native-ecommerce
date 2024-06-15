import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, defaultStyle, inputStyling } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import Footer from "../components/Footer";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputOptions = {
    style: inputStyling,
    mode: "outlined",
    activeOutlineColor: colors.primary,
  };

  const loading = false;

  const submitHandler = () => {
    alert("Logged in!");
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.white }}>
        {/* Heading */}

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.heading}>Login</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            {...inputOptions}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}>
            <Text style={styles.forgetPassword}>Forget Password</Text>
          </TouchableOpacity>

          <Button
            loading={loading}
            textColor={colors.white}
            disabled={email === "" || password === ""}
            style={styles.btn}
            onPress={submitHandler}>
            Log In
          </Button>
          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("signup")}>
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: colors.dark,
    color: colors.white,
    padding: 5,
    borderRadius: 5,
  },
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

export default Login;
