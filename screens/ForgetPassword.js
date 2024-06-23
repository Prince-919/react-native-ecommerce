import { Text, TouchableOpacity, View } from "react-native";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../redux/actions/otherAction";
import { useMessageErrorFormOther } from "../utils/hooks";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const loading = useMessageErrorFormOther(dispatch, navigation, "verify");

  const submitHandler = () => {
    dispatch(forgetPassword(email));
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.white }}>
        {/* Heading */}

        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Forget Password</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />

          <Button
            loading={loading}
            textColor={colors.white}
            disabled={email === ""}
            style={styles.btn}
            onPress={submitHandler}>
            Send OTP
          </Button>
          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("login")}>
            <Text style={styles.link}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default ForgetPassword;
