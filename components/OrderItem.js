import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/styles";
import TextBox from "./TextBox";
import { Button } from "react-native-paper";

const OrderItem = ({
  id,
  price,
  status,
  address,
  orderedOn,
  paymentMethod,
  updateHandler,
  admin = false,
  loading,
  index = 0,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: index % 2 === 0 ? colors.white : colors.dark,
      }}>
      <Text
        style={{
          ...styles.text,
          backgroundColor: index % 2 === 0 ? colors.dark : colors.primary,
        }}>
        ID - #{id}
      </Text>
      <TextBox title={"Address"} value={address} index={index} />
      <TextBox title={"Ordered On"} value={orderedOn} index={index} />
      <TextBox title={"Price"} value={price} index={index} />
      <TextBox title={"Status"} value={status} index={index} />
      <TextBox title={"Payment Method"} value={paymentMethod} index={index} />

      {admin && (
        <Button
          icon={"update"}
          mode="contained"
          textColor={index % 2 === 0 ? colors.white : colors.dark}
          style={{
            width: 120,
            alignSelf: "center",
            marginTop: 10,
            backgroundColor: index % 2 === 0 ? colors.dark : colors.white,
          }}
          onPress={() => updateHandler(id)}
          loading={loading}
          disabled={loading}>
          Update
        </Button>
      )}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "900",
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
