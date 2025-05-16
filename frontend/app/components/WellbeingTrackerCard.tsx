import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../styles';

export default function WellbeingTrackerCard() {
    return (
        <View style={styles.wellbeingCard}>
            <View style={styles.wellbeingTextContainer}>
                <Text style={styles.wellbeingTitle}>Track your wellbeing</Text>
                <Text style={styles.wellbeingSubtitle}>Tell me how you feel</Text>
            </View>
            <View style={styles.wellbeingDivider} />
            <View style={styles.wellbeingButtonContainer}>
                <TouchableOpacity style={[styles.wellbeingButton, styles.wellbeingGradeButton]}>
                    <Text style={[styles.wellbeingButtonText, styles.wellbeingGradeButtonText]}>Grade your day</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.wellbeingButton, styles.wellbeingJournalButton]}>
                    <Text style={[styles.wellbeingButtonText, styles.wellbeingJournalButtonText]}>Add entry to journal</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
