import { ScrollView, TouchableOpacity, View } from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { cartItems } from "./Cart";
import ConfirmOrderItem from "../components/ConfirmOrderItem";
import PriceTag from "../components/PriceTag";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const ConfirmOrder = () => {
  const navigation = useNavigation();

  const itemPrice = 5100;
  const shippingCharges = 200;
  const tax = 0.18 * itemPrice;
  const totalAmount = itemPrice + shippingCharges + tax;

  return (
    <View style={defaultStyle}>
      {/* Header */}
      <Header back={true} />
      {/* Heading */}
      <Heading
        text1="Confirm"
        text2="Order"
        containerStyle={{
          paddingTop: 70,
        }}
      />
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
        }}>
        <ScrollView>
          {cartItems.map((item, index) => {
            return (
              <ConfirmOrderItem
                key={item.product}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
              />
            );
          })}
        </ScrollView>
      </View>

      <PriceTag heading={"Subtotal"} value={itemPrice} />
      <PriceTag heading={"Shipping"} value={shippingCharges} />
      <PriceTag heading={"Tax"} value={tax} />
      <PriceTag heading={"Total"} value={totalAmount} />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("payment", {
            itemPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }>
        <Button
          style={{
            backgroundColor: colors.dark,
            margin: 10,
            padding: 5,
            borderRadius: 100,
          }}
          textColor={colors.white}
          icon={"chevron-right"}>
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmOrder;
