import { Text, View } from "react-native";

const PriceTag = ({ heading, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
      }}>
      <Text style={{ fontWeight: "800" }}>{heading}</Text>
      <Text>₹{value}</Text>
    </View>
  );
};
export default PriceTag;
