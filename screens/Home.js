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
import React, { useState } from "react";
import SearchModal from "../components/SearchModal";

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      _id: "sbdyd",
      category: "Nice",
    },
    {
      _id: "fdfgfg",
      category: "Football",
    },
    {
      _id: "dfggg",
      category: "Man",
    },
    {
      _id: "degvwfr",
      category: "Women",
    },
    {
      _id: "wfegtrhyj",
      category: "Laptop",
    },
    {
      _id: "fdghdg",
      category: "Mobile",
    },
  ];

  const products = [
    {
      _id: "cdfd",
      name: "IPhone 14 Pro Max",
      price: 89000,
      images: [
        {
          url: "https://ismart.co.in/wp-content/uploads/2022/09/iphone-14-pro-finish-select-202209-6-7inch-gold.png",
        },
      ],
    },
    {
      _id: "dedfrs",
      name: "Iqoo Z3 5G",
      price: 24990,
      images: [
        {
          url: "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/1623131796309/f994b6ee0b2ae9b8754e2ac19cb0457c.png",
        },
      ],
    },
  ];

  const categoryBtnHandler = (id) => {
    setCategory(id);
  };

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
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}></ScrollView>
        </View>
      </View>
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
