import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

export default function StreakCard({streak, streakRecord} : {streak: number, streakRecord: number}) {

    return (
        <View style={styles.streakCard}>
            <Text style={styles.streakTitle}>STREAK</Text>
            <View style={styles.streakContent}>
                <View style={styles.circle}>
                    <Text style={styles.circleText}>{streak}</Text>
                </View>
                <View style={styles.square}>
                    <Text style={styles.squareText}>{streakRecord}</Text>
                </View>
            </View>
        </View>
    );
}
