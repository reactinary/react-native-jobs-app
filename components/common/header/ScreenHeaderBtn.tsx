import { Image, TouchableOpacity } from "react-native";
import styles from "./screenheader.style";



type ScreenHeaderBtnProps = {
  iconUrl: any;
  dimension: { width: number; height: number };
  handlePress: () => void;
};

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image style={styles.btnImg(dimension)} source={iconUrl} resizeMode='cover'/>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
