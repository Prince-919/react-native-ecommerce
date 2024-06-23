import { TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const Header = ({ back, emptyCart = false }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const emptyCartHandler = () => {
    dispatch({ type: "clearCart" });
  };

  return (
    <>
      {back && (
        <TouchableOpacity
          style={[styles.leftArrorIcon, { left: 20 }]}
          onPress={() => navigation.goBack()}>
          <Avatar.Icon
            style={{
              backgroundColor: colors.lightGray,
              backgroundColor: "",
            }}
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
          style={{ ...styles.avatarIcon, backgroundColor: "" }}
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
  avatarIcon: {
    backgroundColor: colors.lightGray,
  },
});
