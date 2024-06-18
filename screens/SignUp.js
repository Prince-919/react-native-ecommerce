import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  DEFAULT_AVATAR,
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "../styles/styles";
import { Avatar, Button, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const SignUp = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [avatar, setAvatar] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Send OTP");
  };

  const disabledBtn =
    !name || !email || !passowrd || !address || !city || !country || !pinCode;

  useEffect(() => {
    if (route.params?.image) setAvatar(route.params.image);
  }, [route.params]);

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.white }}>
        {/* Heading */}

        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Sign Up</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.dark,
          }}>
          <View style={{ minHeight: 850 }}>
            <Avatar.Image
              style={{ alignSelf: "center", backgroundColor: colors.primary }}
              size={80}
              source={{
                uri: avatar ? avatar : DEFAULT_AVATAR,
              }}
            />

            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.primary}>Change Photo</Button>
            </TouchableOpacity>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              onChangeText={setName}
              value={name}
            />
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
              value={passowrd}
            />

            <TextInput
              {...inputOptions}
              placeholder="Address"
              onChangeText={setAddress}
              value={address}
            />
            <TextInput
              {...inputOptions}
              placeholder="City"
              onChangeText={setCity}
              value={city}
            />

            <TextInput
              {...inputOptions}
              placeholder="Country"
              onChangeText={setCountry}
              value={country}
            />

            <TextInput
              {...inputOptions}
              placeholder="Pin Code"
              onChangeText={setPinCode}
              value={pinCode}
            />

            <Button
              loading={loading}
              textColor={colors.white}
              disabled={disabledBtn}
              style={styles.btn}
              onPress={submitHandler}>
              Sign Up
            </Button>
            <Text style={styles.or}>OR</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("login")}>
              <Text style={styles.link}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default SignUp;
