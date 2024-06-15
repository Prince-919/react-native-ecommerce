import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button, RadioButton } from "react-native-paper";
import { useState } from "react";

const Payment = ({ navigation, route }) => {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const isAuthenticated = false;

  const redirectToLogin = () => {
    navigation.navigate("login");
  };
  const codHandler = () => {};
  const onlineHandler = () => {};

  return (
    <View style={defaultStyle}>
      {/* Header */}
      <Header back={true} />

      {/* Heading */}
      <Heading
        text1="Payment"
        text2="Method"
        containerStyle={{
          marginTop: 70,
        }}
      />

      <View style={styles.container}>
        <RadioButton.Group
          onValueChange={setPaymentMethod}
          value={paymentMethod}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioText}>Cash On Delivery</Text>
            <RadioButton color={colors.primary} value="COD" />
          </View>
          <View style={styles.radioContainer}>
            <Text style={styles.radioText}>Online</Text>
            <RadioButton color={colors.primary} value="ONLINE" />
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={
          !isAuthenticated
            ? redirectToLogin
            : paymentMethod === "COD"
            ? codHandler
            : onlineHandler
        }>
        <Button
          style={styles.btn}
          textColor={colors.white}
          icon={
            paymentMethod === "COD" ? "check-circle" : "circle-multiple-outline"
          }>
          {paymentMethod === "COD" ? "Place Order" : "Pay"}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    padding: 30,
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: "center",
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  radioText: {
    fontWeight: "800",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.white,
  },
  btn: {
    backgroundColor: colors.dark,
    padding: 5,
    borderRadius: 100,
    margin: 10,
  },
});

export default Payment;
