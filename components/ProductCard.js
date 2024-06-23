import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { colors } from "../styles/styles";
import { Button } from "react-native-paper";

const ProductCard = ({
  id,
  stock,
  name,
  price,
  image,
  addToCardHandler,
  i,
  navigation,
}) => {
  return (
    <Pressable onPress={() => navigation.navigate("productdetails", { id })}>
      <View
        style={{
          ...styles.container,
          backgroundColor: i % 2 === 0 ? colors.primary : colors.white,
        }}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.img}
        />
        <View style={styles.textWrapper}>
          <Text
            numberOfLines={2}
            style={{
              ...styles.name,
              color: i % 2 === 0 ? colors.white : colors.dark,
            }}>
            {name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              ...styles.price,
              color: i % 2 === 0 ? colors.white : colors.dark,
            }}>
            ₹{price}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...styles.btn,
            backgroundColor: i % 2 === 0 ? colors.white : colors.dark,
          }}>
          <Button
            onPress={() => addToCardHandler(id, name, price, image, stock)}
            textColor={i % 2 === 0 ? colors.primary : colors.white}>
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    elevation: 15,
    width: 250,
    height: 400,
    alignContent: "center",
    justifyContent: "space-between",
    margin: 20,
    borderRadius: 20,
  },
  img: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    position: "absolute",
    left: 50,
    top: 105,
  },
  textWrapper: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    width: "100%",
  },
  name: {
    fontWeight: "300",
    fontSize: 25,
    width: "60%",
  },
  price: {
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 10,
  },
  btn: {
    borderRadius: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: "100%",
    paddingVertical: 4,
  },
});
