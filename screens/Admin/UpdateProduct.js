import { View, Text, ScrollView } from "react-native";
import Header from "../../components/Header";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../styles/styles";
import Loader from "../../components/Loader";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import SelectComponent from "../../components/SelectComponent";

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;
  const loadingOther = false;

  const [id] = useState(route.params.id);
  const [name, setName] = useState("");
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

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.lightGray }}>
        {/* Header */}
        <Header back={true} />
        {/* Heading */}

        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Update Product</Text>
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
              <Button
                onPress={() =>
                  navigation.navigate("productimages", { id, images })
                }
                textColor={colors.primary}>
                Manage Image
              </Button>
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
                value={setPrice}
              />
              <TextInput
                {...inputOptions}
                placeholder="Stock"
                onChangeText={stock}
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
                loading={loadingOther}
                disabled={loadingOther}>
                Update
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

export default UpdateProduct;
