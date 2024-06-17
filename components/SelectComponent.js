import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Headline } from "react-native-paper";
import { colors } from "../styles/styles";

const SelectComponent = ({
  visible,
  setVisible,
  setCategory,
  setCategoryID,
  categories = [],
}) => {
  const selectCategoryHandler = (item) => {
    setCategory(item.category);
    setCategoryID(item._id);
    setVisible(false);
  };
  return (
    <>
      {visible && (
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setVisible(false)}>
            <Avatar.Icon
              size={30}
              icon={"close"}
              style={{
                alignSelf: "flex-end",
                backgroundColor: colors.primary,
              }}
            />
          </TouchableOpacity>
          <Headline style={styles.heading}> Select a Category</Headline>
          <ScrollView showsVerticalScrollIndicator={false}>
            {categories.map((item) => {
              return (
                <Text
                  key={item._id}
                  onPress={() => selectCategoryHandler(item)}
                  style={styles.text}>
                  {item.category}
                </Text>
              );
            })}
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    position: "absolute",
    padding: 35,
    height: "90%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    top: 55,
    elevation: 5,
  },
  heading: {
    textAlign: "center",
    marginVertical: 10,
    backgroundColor: colors.dark,
    borderRadius: 5,
    padding: 3,
    color: colors.white,
  },
  text: {
    fontSize: 17,
    fontWeight: "100",
    textTransform: "uppercase",
    marginVertical: 10,
  },
});

export default SelectComponent;
