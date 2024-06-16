import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  colors,
  defaultStyle,
  formHeading,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import Footer from "../components/Footer";
import { inputOptions } from "./../styles/styles";
import Header from "../components/Header";

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Logged in!");
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.white }}>
        {/* Header */}

        <Header back={true} />

        {/* Heading */}

        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Change Password</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Old Password"
            secureTextEntry={true}
            onChangeText={setOldPassword}
            value={oldPassword}
          />
          <TextInput
            {...inputOptions}
            placeholder="New Password"
            secureTextEntry={true}
            onChangeText={setNewPassword}
            value={newPassword}
          />

          <Button
            loading={loading}
            textColor={colors.white}
            disabled={oldPassword === "" || newPassword === ""}
            style={styles.btn}
            onPress={submitHandler}>
            Change
          </Button>
        </View>
      </View>
    </>
  );
};

export default ChangePassword;
