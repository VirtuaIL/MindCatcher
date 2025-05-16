import { Text, View, TextInput } from "react-native";
import { styles } from "./styles"; // Zaimportuj style
import { MaterialCommunityIcons } from '@expo/vector-icons'; //

export default function Index() {
  return (
    <View style={styles.mainComponent}>

        {/* STREAK */}
        <View style={styles.streakCard}>
            {/* Zmień alignItems na 'baseline' */}
            <View style={{ flexDirection: 'row', alignItems: 'baseline', marginBottom: 10 }}>
                <Text style={styles.streakTitle}>STREAK</Text>
                <MaterialCommunityIcons name="fire" size={40} color="orange" style={{ marginLeft: 10 }} />
            </View>
            <View style={styles.streakContent}>
                <View style={styles.circle}>
                    <Text style={styles.circleText}>100</Text>
                </View>
                <View style={styles.square}>
                    <Text style={styles.squareText}>100</Text>
                </View>
            </View>
        </View>


    </View>
  );
}


