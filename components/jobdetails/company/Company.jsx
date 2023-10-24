import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";


const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image style={styles.logoImage}
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfJ7z5psxVw6iB_S4NatrP55cTqJtolx04A&usqp=CAU",
          }}/>
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image style={styles.locationImage} resizeMode='contain'
            source={icons.location}/>
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
