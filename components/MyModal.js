import { Pressable, StyleSheet, View, Text } from "react-native";
import { colors } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";

const MyModal = ({ id, deleteHandler, navigation, setOpenModal }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={{ position: "absolute", top: 10, right: 10 }}
        onPress={() => setOpenModal(false)}>
        <Avatar.Icon
          size={25}
          icon={"close"}
          style={{
            backgroundColor: colors.primary,
          }}
        />
      </Pressable>

      <Text
        style={styles.text}
        onPress={() => navigation.navigate("updateproduct", { id })}>
        Edit
      </Text>
      <Button textColor={colors.primary} onPress={() => deleteHandler(id)}>
        Delete
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    alignSelf: "center",
    justifyContent: "center",
    zIndex: 100,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontWeight: "900",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default MyModal;
