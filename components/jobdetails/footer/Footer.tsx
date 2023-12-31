import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import styles from "./footer.style";
import { icons } from "../../../constants";



type FooterProps = {
  url: string;
};


const Footer: React.FC<FooterProps> = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image style={styles.likeBtnImage} resizeMode='contain'
          source={icons.heartOutline}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn}
       onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
