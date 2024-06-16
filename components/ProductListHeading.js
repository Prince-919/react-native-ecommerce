import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/styles";

const ProductListHeading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image</Text>
      <Text style={styles.text}>Price</Text>
      <Text style={{ ...styles.text, width: null, maxWidth: 120 }}>Name</Text>
      <Text style={{ ...styles.text, width: 60 }}>Category</Text>
      <Text style={styles.text}>Stock</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    height: 40,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    width: 40,
    color: colors.white,
    fontWeight: "900",
  },
});

export default ProductListHeading;
