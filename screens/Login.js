import { Text, TouchableOpacity, View } from "react-native";
import {
  colors,
  defaultStyle,
  formHeading,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { inputOptions } from "./../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userAction";
import Toast from "react-native-toast-message";
import { useMessageErrorFormUser } from "../utils/hooks";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loading = useMessageErrorFormUser(navigation, dispatch, "profile");

  const submitHandler = () => {
    dispatch(login(email, password));
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.white }}>
        {/* Heading */}

        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Login</Text>
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

export default Login;
