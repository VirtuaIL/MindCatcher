import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../styles';
import ChartImageScreen from "@/app/components/Chart";
import { useNavigation } from '@react-navigation/native';

export default function WellbeingTrackerCard() {

    const navigation = useNavigation();

    return (
        <View style={styles.wellbeingCard}>
            <View style={styles.wellbeingTextContainer}>
                <Text style={styles.wellbeingTitle}>Track your wellbeing</Text>
                <Text style={styles.wellbeingSubtitle}>Tell me how you feel</Text>
            </View>
            <View style={styles.wellbeingDivider} />
            <View style={styles.wellbeingButtonContainer}>
                <TouchableOpacity style={[styles.wellbeingButton, styles.wellbeingGradeButton]} onPress={() => navigation.navigate('Form')}>
                    <Text style={[styles.wellbeingButtonText, styles.wellbeingGradeButtonText]}>Grade your day</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.wellbeingButton, styles.wellbeingJournalButton]} onPress={() => navigation.navigate('Journal')}>
                    <Text style={[styles.wellbeingButtonText, styles.wellbeingJournalButtonText]}>Add entry to journal</Text>
                </TouchableOpacity>
            </View>
            <ChartImageScreen/>

            <TouchableOpacity style={localStyles.fullHistoryButton} onPress={() => console.log('Full History pressed')}>
                <Text style={localStyles.fullHistoryText}>SEE FULL HISTORY</Text>
            </TouchableOpacity>

        </View>
    );
}

const localStyles = StyleSheet.create({
    fullHistoryButton: {
        // marginTop: 12,
        paddingVertical: 8,
        alignSelf: 'center',
    },
    fullHistoryText: {
        color: '#5F3DC4',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
