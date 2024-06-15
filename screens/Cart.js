import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    product: "sdnfdfb",
    name: "IPhone 14",
    stock: 3,
    price: 89990,
    image:
      "https://ismart.co.in/wp-content/uploads/2022/09/iphone-14-pro-finish-select-202209-6-7inch-gold.png",
    quantity: 2,
  },
  {
    product: "sdnfjsjfn",
    name: "Iqoo Z3",
    stock: 2,
    price: 24999,
    image:
      "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/1623131796309/f994b6ee0b2ae9b8754e2ac19cb0457c.png",
    quantity: 1,
  },
];

const Cart = () => {
  const navigation = useNavigation();

  const incrementHandler = (id, qty, stock) => {
    console.log("Incrementing quantity: ", id, qty, stock);
  };
  const decrementHandler = (id, qty) => {
    console.log("Decrementing quantity: ", id, qty);
  };

  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      {/* Header */}
      <Header back={true} emptyCart={true} />

      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{
          paddingTop: 70,
          marginLeft: 35,
        }}
      />

      <View
        style={{
          flex: 1,
          paddingVertical: 20,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((item, index) => (
            <CartItem
              navigation={navigation}
              key={item.product}
              id={item.product}
              name={item.name}
              stock={item.stock}
              amount={item.price}
              imgSrc={item.image}
              index={index}
              qty={item.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}>
        <Text>5 Items</Text>
        <Text>₹5</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={
          cartItems.length > 0
            ? () => navigation.navigate("confirmorder")
            : null
        }>
        <Button
          style={{
            backgroundColor: colors.dark,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.white}>
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
