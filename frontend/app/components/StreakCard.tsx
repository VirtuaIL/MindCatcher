import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import { FontAwesome5 } from '@expo/vector-icons';

export default function StreakCard({streak, streakRecord} : {streak: number, streakRecord: number}) {

    return (
        <View style={styles.streakCard}>
            <Text style={styles.streakTitle}>STREAK</Text>
            <View style={styles.streakContent}>
                <View style={styles.circle}>
                    <Text style={styles.circleText}>{streak}</Text>
                </View>
                <View style={styles.square}>
                    <FontAwesome5 name="crown" size={24} color="#FFD700" style={{ position: 'absolute', top: -30 }} />
                    <Text style={styles.squareText}>{streakRecord}</Text>
                </View>
            </View>
        </View>
    );
}
