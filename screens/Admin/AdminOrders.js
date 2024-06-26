import { View, Text, ScrollView } from "react-native";
import Header from "../../components/Header";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import Loader from "../../components/Loader";
import OrderItem from "../../components/OrderItem";
import { Headline } from "react-native-paper";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useGetOrders, useMessageErrorFormOther } from "../../utils/hooks";
import { useDispatch } from "react-redux";
import { processOrder } from "../../redux/actions/otherAction";

const AdminOrders = ({ navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { loading, orders } = useGetOrders(isFocused, true);
  const processOrderLoading = useMessageErrorFormOther(
    dispatch,
    navigation,
    "adminpanel"
  );

  const updateHandler = (id) => {
    dispatch(processOrder(id));
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.lightGray }}>
        {/* Header */}
        <Header back={true} />
        {/* Heading */}

        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>All Orders</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <View
            style={{
              padding: 10,
              flex: 1,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {orders.length > 0 ? (
                orders.map((item, index) => {
                  return (
                    <OrderItem
                      key={item._id}
                      id={item._id}
                      index={index}
                      price={item.totalAmount}
                      status={item.orderStatus}
                      paymentMethod={item.paymentMethods}
                      orderedOn={item.createdAt.split("T")[0]}
                      address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                      admin={true}
                      updateHandler={updateHandler}
                      loading={processOrderLoading}
                    />
                  );
                })
              ) : (
                <Headline style={{ textAlign: "center" }}>
                  No Order Yet
                </Headline>
              )}
            </ScrollView>
          </View>
        )}
      </View>
    </>
  );
};

export default AdminOrders;
