import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

export default function StreakCard() {
    return (
        <View style={styles.streakCard}>
            <Text style={styles.streakTitle}>STREAK</Text>
            <View style={styles.streakContent}>
                <View style={styles.circle}>
                    <Text style={styles.circleText}>100</Text>
                </View>
                <View style={styles.square}>
                    <Text style={styles.squareText}>100</Text>
                </View>
            </View>
        </View>
    );
}
