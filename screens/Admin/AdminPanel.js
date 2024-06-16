import { View, Text, ScrollView } from "react-native";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ButtonBox from "../../components/ButtonBox";
import ProductListHeading from "../../components/ProductListHeading";
import { products } from "../Home";
import ProductListItem from "../../components/ProductListItem";

const AdminPanel = ({ navigation }) => {
  const loading = false;

  const navigationHandler = () => {};

  const deleteProductHandler = () => {
    console.log("Delete Product");
  };

  return (
    <View style={defaultStyle}>
      {/* Header */}
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Admin Panel</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <>
          <View
            style={{
              backgroundColor: colors.dark,
              borderRadius: 50,
              alignItems: "center",
            }}></View>

          <View
            style={{
              flexDirection: "row",
              margin: 10,
              justifyContent: "space-between",
            }}>
            <ButtonBox
              text={"Product"}
              icon={"plus"}
              handler={navigationHandler}
            />
            <ButtonBox
              text={"Product"}
              icon={"format-list-bulleted-square"}
              handler={navigationHandler}
              reverse={true}
            />
            <ButtonBox
              text={"Category"}
              icon={"plus"}
              handler={navigationHandler}
            />
          </View>
          <ProductListHeading />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {products.map((item, index) => {
                return (
                  <ProductListItem
                    navigation={navigation}
                    deleteHandler={deleteProductHandler}
                    key={item._id}
                    id={item._id}
                    index={index}
                    price={item.price}
                    stock={item.stock}
                    name={item.name}
                    category={item.category}
                    imgSrc={item.images[0]?.url}
                  />
                );
              })}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default AdminPanel;
