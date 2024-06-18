import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../styles/styles";
import Loader from "../../components/Loader";
import { Avatar, Button, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import SelectComponent from "../../components/SelectComponent";

const NewProduct = ({ navigation, route }) => {
  const loading = false;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Laptop");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    { _id: "dbsd", category: "Laptop" },
    { _id: "dbsdd", category: "Mobile" },
    { _id: "dbsddwsd", category: "Watch" },
  ]);
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    console.log(name, price, stock, description, categoryID);
  };

  useEffect(() => {
    if (route.params?.image) setImage(route.params.image);
  }, [route.params]);

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.lightGray }}>
        {/* Header */}
        <Header back={true} />
        {/* Heading */}

        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>New Product</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            style={{
              padding: 20,
              elevation: 10,
              backgroundColor: colors.dark,
              borderRadius: 10,
            }}>
            <View style={{ justifyContent: "center", height: 650 }}>
              <View
                style={{
                  marginBottom: 20,
                  width: 80,
                  height: 80,
                  alignSelf: "center",
                }}>
                <Avatar.Image
                  size={80}
                  style={{ backgroundColor: colors.primary }}
                  source={{
                    uri: image ? image : null,
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate("camera", { newProduct: true })
                  }>
                  <Avatar.Icon
                    icon={"camera"}
                    size={30}
                    color={colors.dark}
                    style={{
                      backgroundColor: colors.white,
                      position: "absolute",
                      bottom: 0,
                      right: -5,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <TextInput
                {...inputOptions}
                placeholder="Name"
                onChangeText={name}
                value={setName}
              />
              <TextInput
                {...inputOptions}
                placeholder="Description"
                onChangeText={description}
                value={setDescription}
              />
              <TextInput
                {...inputOptions}
                placeholder="Price"
                onChangeText={price}
                keyboardType="number-pad"
                value={setPrice}
              />
              <TextInput
                {...inputOptions}
                placeholder="Stock"
                onChangeText={stock}
                keyboardType="number-pad"
                value={setStock}
              />
              <Text
                style={{
                  ...inputStyling,
                  textAlign: "center",
                  borderRadius: 3,
                  textAlignVertical: "center",
                }}
                onPress={() => setVisible(true)}>
                {category}
              </Text>
              <Button
                textColor={colors.white}
                style={{
                  backgroundColor: colors.primary,
                  margin: 10,
                  padding: 5,
                  borderRadius: 100,
                }}
                onPress={submitHandler}
                loading={loading}
                disabled={loading}>
                Create
              </Button>
            </View>
          </ScrollView>
        )}
      </View>

      <SelectComponent
        visible={visible}
        setVisible={setVisible}
        setCategory={setCategory}
        setCategoryID={setCategoryID}
        categories={categories}
      />
    </>
  );
};

export default NewProduct;
