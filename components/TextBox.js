import { Text } from "react-native";
import { colors } from "../styles/styles";

const TextBox = ({ title, value, index }) => {
  return (
    <Text
      style={{
        marginVertical: 6,
        color: index % 2 === 0 ? colors.dark : colors.white,
      }}>
      <Text style={{ fontWeight: "900" }}>{title} - </Text>
      {title === "Price" ? "₹" : ""}
      {value}
    </Text>
  );
};

export default TextBox;
