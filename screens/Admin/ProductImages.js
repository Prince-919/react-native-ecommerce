import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import { useState } from "react";
import ImageCard from "../../components/ImageCard";
import { Avatar, Button } from "react-native-paper";

const ProductImages = ({ navigation, route }) => {
  console.log(route.params);

  const [images] = useState(route.params.images);
  const [productId] = useState(route.params.id);
  const [image, setImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  const loading = false;

  const deleteHandler = (id) => {
    console.log("Delete handler called", id);
    console.log("Product id", productId);
  };
  const submitHandler = () => {};

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.lightGray }}>
      {/* Header */}
      <Header back={true} />
      {/* Heading */}

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}> Images</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20 }}>
        <View
          style={{
            backgroundColor: colors.white,
            padding: 40,
            minHeight: 400,
          }}>
          {images.map((item) => {
            return (
              <ImageCard
                key={item._id}
                id={item._id}
                src={item.url}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: colors.dark,
          padding: 20,
          borderRadius: 10,
        }}>
        <Image
          style={{
            backgroundColor: colors.white,
            width: 100,
            height: 100,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={{
            uri: image,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("camera", { updateProduct: true })
            }>
            <Avatar.Icon
              icon={"camera"}
              size={30}
              color={colors.dark}
              style={{
                backgroundColor: colors.white,
                marginVertical: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <Button
          textColor={colors.white}
          style={{
            backgroundColor: colors.primary,
            padding: 3,
            borderRadius: 100,
          }}
          loading={loading}
          onPress={submitHandler}
          disabled={!imageChanged}>
          Add
        </Button>
      </View>
    </View>
  );
};

export default ProductImages;
