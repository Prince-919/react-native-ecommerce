import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { colors } from "../styles/styles";
import { Headline } from "react-native-paper";

const SearchItem = ({ imgSrc, name, price, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View style={styles.container}>
        <Image
          source={{
            uri: imgSrc,
          }}
          style={styles.img}
        />
        <View style={styles.textWrapper}>
          <Text numberOfLines={1}>{name}</Text>
          <Headline numberOfLines={1} style={styles.price}>
            ₹{price}
          </Headline>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 30,
  },
  img: {
    width: 80,
    height: 80,
    position: "absolute",
    resizeMode: "contain",
    left: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textWrapper: {
    width: "80%",
    paddingHorizontal: 30,
  },
  price: { fontWeight: "900" },
});
