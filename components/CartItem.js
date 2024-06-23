import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const CartItem = ({
  name,
  amount,
  stock,
  index,
  id,
  imgSrc,
  qty,
  incrementHandler,
  decrementHandler,
  navigation,
}) => {
  const iconOptions = {
    size: 20,
    style: {
      borderRadius: 5,
      backgroundColor: colors.lightGray2,
      width: 25,
      height: 25,
    },
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.box,
          backgroundColor: index % 2 === 0 ? colors.primary : colors.dark,
        }}>
        <Image source={{ uri: imgSrc }} style={styles.img} />
      </View>

      <View style={{ width: "40%", paddingHorizontal: 25 }}>
        <Text
          numberOfLines={1}
          style={{ fontSize: 17 }}
          onPress={() => navigation.navigate("productdetails", { id })}>
          {name}
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 17, fontWeight: "900" }}>
          ₹{amount}
        </Text>
      </View>
      <View style={styles.qtyWrapper}>
        <TouchableOpacity
          onPress={() =>
            decrementHandler(id, name, amount, imgSrc, stock, qty)
          }>
          <Avatar.Icon {...iconOptions} icon={"minus"} />
        </TouchableOpacity>
        <Text style={styles.qty}>{qty}</Text>
        <TouchableOpacity
          onPress={() =>
            incrementHandler(id, name, amount, imgSrc, stock, qty)
          }>
          <Avatar.Icon {...iconOptions} icon={"plus"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    marginVertical: 20,
  },
  box: {
    width: "40%",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  img: {
    width: 200,
    height: "100%",
    resizeMode: "contain",
    top: "-20%",
    left: "10%",
  },
  qty: {
    backgroundColor: colors.white,
    height: 25,
    width: 25,
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.lightGray2,
  },
  qtyWrapper: {
    alignItems: "center",
    width: "20%",
    height: 80,
    justifyContent: "space-between",
    alignSelf: "center",
  },
});

export default CartItem;
