import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const incrementHandler = (id, name, price, image, stock, quantity) => {
    const newQty = quantity + 1;
    if (stock <= quantity)
      return Toast.show({
        type: "error",
        text1: "Maximum value added",
      });
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: newQty,
      },
    });
  };
  const decrementHandler = (id, name, price, image, stock, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) return dispatch({ type: "removeFromCart", payload: id });
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: newQty,
      },
    });
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
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
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
            ))
          ) : (
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              No Item Yet
            </Text>
          )}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}>
        <Text>{cartItems.length} Items</Text>
        <Text>
          ₹
          {cartItems.reduce(
            (prev, curr) => prev + curr.quantity * curr.price,
            0
          )}
        </Text>
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
