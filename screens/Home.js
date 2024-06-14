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

const Home = () => {
  const [category, setCategory] = useState("");
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

  const categoryBtnHandler = (id) => {
    setCategory(id);
  };

  return (
    <View style={defaultStyle}>
      <Header />
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
        </View>
        <View>
          <TouchableOpacity>
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
    </View>
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
