import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MyIcon from "../components/MyIcon";
import * as ImagePicker from "expo-image-picker";
import { defaultStyle } from "../styles/styles";

const CameraComponent = ({ navigation, route }) => {
  const [type, setType] = useState("back");
  const [hasPermission, setHasPermission] = useCameraPermissions();
  const [camera, setCamera] = useState(null);

  function toggleCameraType() {
    setType((current) => (current === "back" ? "front" : "back"));
  }

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false)
      return alert("Permission to access gallery is required");
    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(data);

    if (route.params?.newProduct)
      return navigation.navigate("newproduct", {
        image: data.assets[0].uri,
      });

    if (route.params?.updateProduct)
      return navigation.navigate("productimages", {
        image: data.assets[0].uri,
      });

    if (route.params?.updateProfile)
      return navigation.navigate("profile", {
        image: data.assets[0].uri,
      });
    else
      return navigation.navigate("signup", {
        image: data.assets[0].uri,
      });
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const clickPicture = async () => {
    const data = await camera.takePictureAsync();
    console.log(data);

    if (route.params?.newProduct)
      return navigation.navigate("newproduct", {
        image: data.uri,
      });

    if (route.params?.updateProduct)
      return navigation.navigate("productimages", {
        image: data.uri,
      });
    if (route.params?.updateProfile)
      return navigation.navigate("profile", {
        image: data.uri,
      });
    else
      return navigation.navigate("signup", {
        image: data.uri,
      });
  };
  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={defaultStyle}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        type={type}
        style={styles.camera}
        facing={type}
        ref={(e) => setCamera(e)}>
        <View
          style={{
            flexDirection: "row",
            bottom: 10,
            width: "100%",
            justifyContent: "space-evenly",
            position: "absolute",
          }}>
          <MyIcon icon={"image"} handler={openImagePicker} />
          <MyIcon icon={"camera"} handler={clickPicture} />
          <MyIcon icon={"camera-flip"} handler={toggleCameraType} />
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
export default CameraComponent;
