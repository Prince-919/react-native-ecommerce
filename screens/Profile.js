import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  DEFAULT_AVATAR,
  colors,
  defaultStyle,
  formHeading,
} from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import { useEffect, useState } from "react";
import ButtonBox from "../components/ButtonBox";
import Footer from "./../components/Footer";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "./../redux/actions/userAction";
import {
  useMessageErrorFormOther,
  useMessageErrorFormUser,
} from "./../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import mime from "mime";
import { updatePicture } from "../redux/actions/otherAction";

const Profile = ({ navigation, route }) => {
  const { user } = useSelector((state) => state.user);
  const [avatar, setAvatar] = useState(
    user?.avatar ? user?.avatar?.url : DEFAULT_AVATAR
  );

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

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

  const loadingPicture = useMessageErrorFormOther(
    dispatch,
    null,
    null,
    loadUser
  );

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
      // dispatch updatePic Here
      const myForm = new FormData();
      myForm.append("file", {
        uri: route.params.image,
        type: mime.getType(route.params.image),
        name: route.params.image.split("/").pop(),
      });
      dispatch(updatePicture(myForm));
    }
    dispatch(loadUser());
  }, [route.params, dispatch, isFocused]);

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
                disabled={loadingPicture}
                onPress={() =>
                  navigation.navigate("camera", { updateProfile: true })
                }>
                <Button
                  disabled={loadingPicture}
                  loading={loadingPicture}
                  textColor={colors.primary}>
                  Change Photo
                </Button>
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
                {user?.role === "admin" && (
                  <ButtonBox
                    text={"Admin"}
                    icon={"view-dashboard"}
                    reverse={true}
                    handler={navigateHandler}
                  />
                )}
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
