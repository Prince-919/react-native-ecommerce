import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import React, { useEffect, useState } from "react";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./../redux/actions/productAction";
import { useSetCategories } from "../utils/hooks";

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const categoryBtnHandler = (id) => {
    setCategory(id);
  };
  const addToCardHandler = (id) => {
    console.log("Add to cart", id);
  };

  useSetCategories(setCategories, isFocused);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(getAllProducts(searchQuery, category));
    }, 200);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [dispatch, searchQuery, category, isFocused]);

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />
        <View style={styles.container}>
          {/* Heading */}

          <Heading text1="Our" text2="Products" />

          {/* Search */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                color="gray"
                size={50}
                style={{
                  backgroundColor: colors.white,
                  elevation: 12,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}>
            {categories.map((item, index) => {
              return (
                <Button
                  key={item._id}
                  style={{
                    backgroundColor:
                      category === item._id ? colors.primary : colors.lightGray,
                    borderRadius: 100,
                    margin: 5,
                  }}
                  onPress={() => categoryBtnHandler(item._id)}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: category === item._id ? colors.white : "gray",
                    }}>
                    {item.category}
                  </Text>
                </Button>
              );
            })}
          </ScrollView>
        </View>

        {/* Products */}

        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => {
              return (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  i={index}
                  stock={item.stock}
                  name={item.name}
                  price={item.price}
                  image={item.images[0]?.url}
                  addToCardHandler={addToCardHandler}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute="home" />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
