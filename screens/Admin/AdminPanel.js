import { View, Text, ScrollView } from "react-native";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import Header from "../../components/Header";
import ButtonBox from "../../components/ButtonBox";
import ProductListHeading from "../../components/ProductListHeading";
import ProductListItem from "../../components/ProductListItem";
import Chart from "../../components/Chart";
import { useAdminProducts, useMessageErrorFormOther } from "../../utils/hooks";
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { deleteProduct } from "../../redux/actions/otherAction";
import { getAdminProducts } from "../../redux/actions/productAction";
import Loader from "./../../components/Loader";

const AdminPanel = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { products, inStock, outOfStock, loading } = useAdminProducts(
    dispatch,
    isFocused
  );

  const navigationHandler = (text) => {
    switch (text) {
      case "Category":
        navigation.navigate("categories");
        break;
      case "All Orders":
        navigation.navigate("adminorders");
        break;
      case "Product":
        navigation.navigate("newproduct");
        break;
      default:
        navigation.navigate("adminorders");
        break;
    }
  };

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const loadingDelete = useMessageErrorFormOther(
    dispatch,
    null,
    null,
    getAdminProducts
  );

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
              borderRadius: 10,
              alignItems: "center",
            }}>
            <Chart inStock={inStock} outOfStock={outOfStock} />
          </View>

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
              text={"All Orders"}
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
              {!loadingDelete &&
                products.map((item, index) => (
                  <ProductListItem
                    navigation={navigation}
                    deleteHandler={deleteProductHandler}
                    key={item._id}
                    id={item._id}
                    i={index}
                    price={item.price}
                    stock={item.stock}
                    name={item.name}
                    category={item.category?.category}
                    imgSrc={item.images[0].url}
                  />
                ))}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default AdminPanel;
