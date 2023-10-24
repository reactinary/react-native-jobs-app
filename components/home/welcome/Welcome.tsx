import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";


type WelcomeProps = {
  searchTerm: string;
  setSearchTerm: (text: string) => void;
  handleClick: () => void;
};

const jobTypes = ["Full-time", "Part-time", "Contractor"];


const Welcome: React.FC<WelcomeProps> = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      {/* ------- HELLO 👋 -------- */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Max</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      {/* ------- SEARCH 🔍 ------- */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}  placeholder='What are you looking for?'
            value={searchTerm}  onChangeText={(text) => setSearchTerm(text)}/>
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image style={styles.searchBtnImage} source={icons.search} resizeMode='contain'/>
        </TouchableOpacity>
      </View>

      {/* ------- JOBS 💼 ------- */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
