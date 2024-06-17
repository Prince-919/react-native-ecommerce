import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const ImageCard = ({ id, src, deleteHandler }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: src,
        }}
        style={{
          width: "100%",
          height: "80%",
          resizeMode: "contain",
        }}
      />
      <TouchableOpacity activeOpacity={0.8} onPress={() => deleteHandler(id)}>
        <Avatar.Icon
          size={30}
          icon={"delete"}
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
    alignItems: "center",
    borderRadius: 10,
    height: 300,
  },
});

export default ImageCard;
