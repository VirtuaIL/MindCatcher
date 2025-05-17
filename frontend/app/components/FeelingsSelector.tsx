import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const feelings = [
    'HUNGRY', 'TIRED', 'GOOFY',
    'EXCITED', 'CHEERFUL',
    'THOUGHTFUL', 'ANGRY',
    'APATHETIC', 'STRESSED',
    'SLEEPY', 'OVERSTIMULATED',
    'PRIDE',
];

export default function FeelingsSelector({onSendData} : {onSendData: (data: {[key:string] : boolean}) => void}) {
    const initialFeelingsState = Object.fromEntries(feelings.map(f => [f, false]));
    const [selectedFeelings, setSelectedFeelings] = useState(initialFeelingsState);

    useEffect(() => {
        onSendData(selectedFeelings);
    }, [selectedFeelings]);

    const toggleFeeling = (feeling: string) => {
        setSelectedFeelings((prev) => ({
            ...prev,
            [feeling]: !prev[feeling],
        }));
    };


    return (
        <View style={styles.card}>
            <Text style={styles.title}>How do you feel</Text>
            <View style={styles.tagsContainer}>
                {feelings.map((feeling) => (
                    <TouchableOpacity
                        key={feeling}
                        style={[
                            styles.tag,
                            selectedFeelings[feeling] && styles.tagSelected, // check boolean
                        ]}
                        onPress={() => toggleFeeling(feeling)}
                    >
                        <Text
                            style={[
                                styles.tagText,
                                selectedFeelings[feeling] && styles.tagTextSelected,
                            ]}
                        >
                            {feeling}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 16,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    title: {
        fontSize: 20,
        color: '#5F3DC4',
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
    },
    tag: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#5F3DC4',
        margin: 4,
    },
    tagSelected: {
        backgroundColor: '#5F3DC4',
    },
    tagText: {
        color: '#5F3DC4',
        fontWeight: 'bold',
    },
    tagTextSelected: {
        color: 'white',
    },
});
