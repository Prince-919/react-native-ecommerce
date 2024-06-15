import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const Footer = ({ activeRoute = "home" }) => {
  const navigation = useNavigation();
  const loading = false;
  const isAuthenticated = false;

  const navigationHandler = (key) => {
    switch (key) {
      case 0:
        navigation.navigate("home");
        break;
      case 1:
        navigation.navigate("cart");
        break;
      case 2:
        if (isAuthenticated) navigation.navigate("profile");
        else navigation.navigate("login");
        break;
      default:
        navigation.navigate("home");
        break;
    }
  };

  const avatarOptions = {
    size: 50,
    color: colors.white,
    style: {
      backgroundColor: colors.primary,
    },
  };

  return (
    <>
      {loading === false && (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigationHandler(1)}>
              <Avatar.Icon
                {...avatarOptions}
                icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigationHandler(2)}>
              <Avatar.Icon
                {...avatarOptions}
                icon={activeRoute === "profile" ? "account" : "account-outline"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <View
              style={{
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigationHandler(0)}>
                <Avatar.Icon
                  {...avatarOptions}
                  icon={activeRoute === "home" ? "home" : "home-outline"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderTopRightRadius: 120,
    borderTopLeftRadius: 120,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  box: {
    position: "absolute",
    width: 80,
    height: 80,
    backgroundColor: colors.white,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -50,
    alignSelf: "center",
  },
});
