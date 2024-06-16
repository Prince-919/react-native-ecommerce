import { ScrollView, Text, View } from "react-native";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";

import Header from "../components/Header";

const UpdateProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [avatar, setAvatar] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Send OTP");
    navigation.navigate("verify");
  };

  const disabledBtn =
    !name || !email || !address || !city || !country || !pinCode;

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.white }}>
        {/* Header */}
        <Header back={true} />
        {/* Heading */}

        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Edit Profile</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.dark,
          }}>
          <View
            style={{
              marginTop: "25%",
            }}>
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
              Update Profile
            </Button>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default UpdateProfile;
