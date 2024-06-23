import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button, RadioButton } from "react-native-paper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../redux/actions/otherAction";
import { useMessageErrorFormOther } from "../utils/hooks";
import { useStripe } from "@stripe/stripe-react-native";
import Toast from "react-native-toast-message";
import axios from "axios";
import { server } from "../redux/store";
import Loader from "../components/Loader";

const Payment = ({ navigation, route }) => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loaderLoading, setLoaderLoading] = useState(false);

  const dispatch = useDispatch();
  const stripe = useStripe();

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const redirectToLogin = () => {
    navigation.navigate("login");
  };

  const codHandler = (paymentInfo) => {
    const shippingInfo = {
      address: user?.address,
      city: user?.city,
      country: user?.country,
      pinCode: user?.pinCode,
    };
    const itemsPrice = route.params.itemPrice;
    const shippingCharges = route.params.shippingCharges;
    const taxPrice = route.params.tax;
    const totalAmount = route.params.totalAmount;

    dispatch(
      placeOrder(
        cartItems,
        shippingInfo,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
        paymentInfo
      )
    );
  };
  const onlineHandler = async () => {
    try {
      const {
        data: { client_secret },
      } = await axios.post(
        `${server}/order/payment`,
        {
          totalAmount: route.params.totalAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const init = await stripe.initPaymentSheet({
        paymentIntentClientSecret: client_secret,
        merchantDisplayName: "Shoptopia!",
      });
      if (init.error)
        return Toast.show({ type: "error", text1: init.error.message });

      const presentSheet = await stripe.presentPaymentSheet();
      setLoaderLoading(true);
      if (presentSheet.error) {
        setLoaderLoading(false);
        return Toast.show({ type: "error", text1: presentSheet.error.message });
      }

      const { paymentIntent } = await stripe.retrievePaymentIntent(
        client_secret
      );
      if (paymentIntent.status === "Succeeded") {
        codHandler({ id: paymentIntent.id, status: paymentIntent.status });
      }
    } catch (error) {
      return Toast.show({
        type: "error",
        text1: "Something went wrong",
        text2: error,
      });
    }
  };

  const loading = useMessageErrorFormOther(
    dispatch,
    navigation,
    "profile",
    () => ({
      type: "clearCart",
    })
  );

  return (
    <>
      {loaderLoading ? (
        <Loader />
      ) : (
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
            disabled={loading}
            activeOpacity={0.8}
            onPress={
              !isAuthenticated
                ? redirectToLogin
                : paymentMethod === "COD"
                ? () => codHandler()
                : onlineHandler
            }>
            <Button
              loading={loading}
              disabled={loading}
              style={styles.btn}
              textColor={colors.white}
              icon={
                paymentMethod === "COD"
                  ? "check-circle"
                  : "circle-multiple-outline"
              }>
              {paymentMethod === "COD" ? "Place Order" : "Pay"}
            </Button>
          </TouchableOpacity>
        </View>
      )}
    </>
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
