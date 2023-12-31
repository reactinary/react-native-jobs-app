import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";



type NearbyJob = {
  job_title: string;
  employer_logo: string;
  job_employment_type: string;
};

type NearbyJobCardProps = {
  job: NearbyJob;
  handleNavigate: () => void;
};

const NearbyJobCard: React.FC<NearbyJobCardProps> = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfJ7z5psxVw6iB_S4NatrP55cTqJtolx04A&usqp=CAU",
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>

        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
