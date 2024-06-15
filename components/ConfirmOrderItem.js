import { Image, Text, View } from "react-native";

const ConfirmOrderItem = ({ image, quantity, price, name }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
      }}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 50,
          height: 50,
          resizeMode: "contain",
        }}
      />

      <Text>{name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text>{quantity}</Text>
        <Text style={{ marginHorizontal: 10 }}>x</Text>
        <Text>₹{price}</Text>
      </View>
    </View>
  );
};

export default ConfirmOrderItem;
