import { useNavigation } from "@react-navigation/native";
import {
  BackHandler,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../styles/styles";
import { Searchbar } from "react-native-paper";
import SearchItem from "./SearchItem";
import { useEffect } from "react";

const SearchModal = ({
  searchQuery,
  setSearchQuery,
  setActiveSearch,
  products,
}) => {
  const navigation = useNavigation();

  const backAction = () => {
    setSearchQuery("");
    setActiveSearch(false);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={(e) => setSearchQuery(e)}
          value={searchQuery}
          style={styles.searchBar}
        />

        <ScrollView>
          <View style={{ paddingVertical: 40, paddingHorizontal: 10 }}>
            {products.map((item) => {
              return (
                <SearchItem
                  key={item._id}
                  imgSrc={item.images[0]?.url}
                  name={item.name}
                  price={item.price}
                  handler={() =>
                    navigation.navigate("productdetails", { id: item._id })
                  }
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    zIndex: 100,
    backgroundColor: colors.white,
    padding: 35,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchBar: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: colors.lightGray,
  },
});
