import { View, Text, ScrollView } from "react-native";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
} from "../../styles/styles";
import Header from "../../components/Header";
import CategoryCard from "../../components/CategoryCard";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";

const categories = [
  {
    _id: "ddfjnedfuns",
    name: "Laptop",
  },
  {
    _id: "ddfjneddfuns",
    name: "Mobile",
  },
  {
    _id: "ddfddfuns",
    name: "Watch",
  },
];

const Categories = () => {
  const [category, setCategory] = useState("");
  const deleteHandler = (id) => {
    console.log("Category deleted", id);
  };

  const submitHandler = () => {};

  const loading = false;

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.lightGray }}>
      {/* Header */}
      <Header back={true} />
      {/* Heading */}

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Categories</Text>
      </View>

      <ScrollView
        style={{
          marginBottom: 20,
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            padding: 20,
            minHeight: 400,
          }}>
          {categories.map((category, index) => {
            return (
              <CategoryCard
                key={category._id}
                id={category._id}
                name={category.name}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: colors.dark,
          elevation: 10,
          padding: 20,
          borderRadius: 10,
        }}>
        <TextInput
          {...inputOptions}
          placeholder="Category"
          onChangeText={setCategory}
          value={category}
        />
        <Button
          textColor={colors.white}
          disabled={!category}
          onPress={submitHandler}
          loading={loading}
          style={{
            backgroundColor: colors.primary,
            margin: 20,
            padding: 5,
            borderRadius: 100,
          }}>
          Add
        </Button>
      </View>
    </View>
  );
};

export default Categories;
