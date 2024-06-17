import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const CategoryCard = ({ name, id, deleteHandler }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={() => deleteHandler(id)}>
        <Avatar.Icon
          icon={"delete"}
          size={30}
          style={{
            backgroundColor: colors.primary,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default CategoryCard;
