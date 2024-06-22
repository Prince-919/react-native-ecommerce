import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import { useEffect, useState } from "react";
import ButtonBox from "../components/ButtonBox";
import Footer from "./../components/Footer";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { logout } from "./../redux/actions/userAction";
import { useMessageErrorFormUser } from "./../utils/hooks";

const Profile = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState(null);

  const user = {
    name: "Prince Sharma",
    email: "hello@prince.com",
  };

  const dispatch = useDispatch();

  const loading = useMessageErrorFormUser(navigation, dispatch, "login");

  const logoutHandler = () => {
    dispatch(logout());
  };

  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Orders":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
        navigation.navigate("changepassword");
        break;
      case "Log Out":
        logoutHandler();
        break;

      default:
      case "Orders":
        navigation.navigate("orders");
        break;
    }
  };

  useEffect(() => {
    if (route.params?.image) setAvatar(route.params.image);
  }, [route.params]);

  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Profile</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                size={100}
                style={{ backgroundColor: colors.primary }}
                source={{
                  uri: avatar,
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("camera", { updateProfile: true })
                }>
                <Button textColor={colors.primary}>Change Photo</Button>
              </TouchableOpacity>

              <Text style={styles.name}>{user?.name}</Text>
              <Text style={styles.email}>{user?.email}</Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                }}>
                <ButtonBox
                  text={"Orders"}
                  icon={"format-list-bulleted-square"}
                  handler={navigateHandler}
                />
                <ButtonBox
                  text={"Admin"}
                  icon={"view-dashboard"}
                  reverse={true}
                  handler={navigateHandler}
                />
                <ButtonBox
                  text={"Profile"}
                  icon={"pencil"}
                  handler={navigateHandler}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-evenly",
                }}>
                <ButtonBox
                  text={"Password"}
                  icon={"pencil"}
                  handler={navigateHandler}
                />
                <ButtonBox
                  text={"Log Out"}
                  icon={"exit-to-app"}
                  handler={navigateHandler}
                />
              </View>
            </View>
          </>
        )}
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.dark,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.white,
  },
  email: {
    fontWeight: "300",
    color: colors.white,
  },
});

export default Profile;
