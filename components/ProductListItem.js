import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/styles";
import { useState } from "react";
import MyModal from "./MyModal";

const ProductListItem = ({
  navigation,
  deleteHandler,
  index,
  id,
  price,
  stock,
  name,
  category,
  imgSrc,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Pressable
        onLongPress={() => setOpenModal((prev) => !prev)}
        onPress={() => navigation.navigate("productdetails", { id })}>
        <View
          style={{
            ...styles.container,
            backgroundColor: index % 2 === 0 ? colors.primary : colors.dark,
          }}>
          <Image
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
            }}
            source={{
              uri: imgSrc,
            }}
          />
          <Text
            style={{
              color: colors.white,
              width: 60,
            }}
            numberOfLines={1}>
            ₹{price}
          </Text>
          <Text
            style={{
              color: colors.white,
              maxWidth: 120,
            }}
            numberOfLines={1}>
            {name}
          </Text>
          <Text
            style={{
              color: colors.white,
              width: 60,
            }}
            numberOfLines={1}>
            {category}
          </Text>
          <Text
            style={{
              color: colors.white,
              width: 40,
            }}
            numberOfLines={1}>
            {stock}
          </Text>
        </View>
      </Pressable>

      {openModal && (
        <MyModal
          id={id}
          deleteHandler={deleteHandler}
          navigation={navigation}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default ProductListItem;
