import { TouchableOpacity, FlatList, Text, View } from "react-native";
import styles from "./tabs.style";
import { SIZES } from "../../../constants";


type TabsProps = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

type TabButtonProps = {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
};

const TabButton: React.FC<TabButtonProps> = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList  data={tabs}  horizontal  showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton name={item} activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
