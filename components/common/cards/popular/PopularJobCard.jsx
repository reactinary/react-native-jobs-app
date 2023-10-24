import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";


const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image style={styles.logoImage} resizeMode='contain'
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfJ7z5psxVw6iB_S4NatrP55cTqJtolx04A&usqp=CAU",
          }}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.job_publisher} -
          </Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
