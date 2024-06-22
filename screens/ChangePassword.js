import { Text, View } from "react-native";
import {
  colors,
  defaultStyle,
  formHeading,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { inputOptions } from "./../styles/styles";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { updatePassword } from "../redux/actions/otherAction";
import { useMessageErrorFormOther } from "../utils/hooks";
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const loading = useMessageErrorFormOther(dispatch);

  const submitHandler = () => {
    dispatch(updatePassword(oldPassword, newPassword));
    setOldPassword("");
    setNewPassword("");
  };

  return (
    <View style={defaultStyle}>
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
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <TextInput
          {...inputOptions}
          placeholder="New Password"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
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
  );
};

export default ChangePassword;
