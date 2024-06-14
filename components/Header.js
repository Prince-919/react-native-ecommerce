import { TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = ({ back, emptyCart = false }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const emptyCartHandler = () => {
    console.log("Empty Cart!");
  };

  return (
    <>
      {back && (
        <TouchableOpacity
          style={[styles.leftArrorIcon, { left: 20 }]}
          onPress={() => navigation.goBack()}>
          <Avatar.Icon
            style={{ backgroundColor: colors.lightGray }}
            icon={"arrow-left"}
            color={route.name === "productdetails" ? colors.white : colors.dark}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={[styles.leftArrorIcon, { right: 20 }]}
        onPress={
          emptyCart ? emptyCartHandler : () => navigation.navigate("cart")
        }>
        <Avatar.Icon
          style={{ backgroundColor: colors.lightGray }}
          icon={emptyCart ? "delete-outline" : "cart-outline"}
          color={route.name === "productdetails" ? colors.white : colors.dark}
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  leftArrorIcon: {
    position: "absolute",
    top: 40,
    zIndex: 10,
  },
});
