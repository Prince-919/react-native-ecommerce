import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { Avatar, Button } from "react-native-paper";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { getProductDetails } from "../redux/actions/productAction";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({ route: { params } }) => {
  const {
    product: { name, price, stock, description, images },
  } = useSelector((state) => state.product);

  const isCarousel = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const incrementQty = () => {
    if (stock <= quantity)
      return Toast.show({ type: "error", text1: "Maximum value added" });
    setQuantity((prev) => prev + 1);
  };
  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const addToCardHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out Of Stock",
      });
    dispatch({
      type: "addToCart",
      payload: {
        product: params.id,
        name,
        price,
        image: images[0]?.url,
        stock,
        quantity,
      },
    });
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });
  };

  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id, isFocused]);

  return (
    <View
      style={{ ...defaultStyle, backgroundColor: colors.primary, padding: 0 }}>
      <Header back={true} />
      {/* Carousel */}
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />

      <View style={styles.wrapper}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>
        <Text style={styles.price}>₹{price}</Text>
        <Text style={styles.description}>₹{description}</Text>
        <View style={styles.quantityParent}>
          <Text style={styles.quantityTitle}>Quantity</Text>
          <View style={styles.quantityWrapper}>
            <TouchableOpacity activeOpacity={0.8} onPress={decrementQty}>
              <Avatar.Icon size={20} icon={"minus"} style={styles.subIcon} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={incrementQty}>
              <Avatar.Icon size={20} icon={"plus"} style={styles.subIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={addToCardHandler}>
          <Button icon={"cart"} style={styles.btn} textColor={colors.white}>
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={styles.container} key={index}>
    <Image source={{ uri: item.url }} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  wrapper: {
    backgroundColor: colors.white,
    padding: 35,
    flex: 1,
    marginTop: -380,
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
  },
  name: {
    fontSize: 25,
  },
  price: {
    fontSize: 18,
    fontWeight: "900",
  },
  description: {
    letterSpacing: 1,
    lineHeight: 20,
    marginVertical: 15,
  },
  subIcon: {
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundColor: colors.lightGray2,
  },
  quantity: {
    backgroundColor: colors.white,
    width: 25,
    height: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.lightGray2,
  },
  quantityWrapper: {
    width: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  quantityTitle: {
    color: colors.dark,
    fontWeight: "100",
  },
  btn: {
    backgroundColor: colors.dark,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});

export default ProductDetails;
