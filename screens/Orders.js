import { View, Text, ScrollView } from "react-native";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "../components/OrderItem";

const orders = [
  {
    _id: "dndjf783e",
    shippingInfo: {
      address: "rampur word no-6",
      city: "Mohania",
      country: "India",
      pinCode: 821109,
    },
    createdAt: "16-06-2024T6725",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 65590,
  },
  {
    _id: "dndjf7sf83e",
    shippingInfo: {
      address: "Muthani",
      city: "Mohania",
      country: "India",
      pinCode: 821109,
    },
    createdAt: "10-06-2024T2452",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmount: 25590,
  },
  {
    _id: "dndjf7sf8e",
    shippingInfo: {
      address: "Sakari",
      city: "Kudra",
      country: "India",
      pinCode: 821110,
    },
    createdAt: "10-06-2024T2452",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmount: 25590,
  },
];

const Orders = () => {
  const loading = false;

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.lightGray }}>
      {/* Header */}
      <Header back={true} />
      {/* Heading */}

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
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
                    paymentMethod={item.paymentMethod}
                    orderedOn={item.createdAt.split("T")[0]}
                    address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                  />
                );
              })
            ) : (
              <Headline style={{ textAlign: "center" }}>No Order Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
