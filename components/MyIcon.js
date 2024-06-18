import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "./../styles/styles";

const MyIcon = ({ icon, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <Avatar.Icon
        icon={icon}
        size={40}
        color={colors.white}
        style={{
          backgroundColor: colors.primary,
        }}
      />
    </TouchableOpacity>
  );
};

export default MyIcon;
