import React from 'react';
import { View, Text } from 'react-native';
import { emotionalVocabularyCardStyles as styles } from '../vocabStyle'; // Dostosuj ścieżkę, jeśli trzeba

interface EmotionalVocabularyCardProps {
    mainTitle?: string;
    word?: string;
    partOfSpeech?: string;
    definition?: string;
}


export default function EmotionalVocabularyCard() {
    const mainTitle = "IMPROVE YOUR EMOTIONAL VOCABULARY";
    const word = "SONDER";
    const partOfSpeech = "noun";
    const definition = "the feeling one has on realizing that every other individual one sees has a life as full and real as one's own, in which they are the central character and others, including oneself, have secondary or insignificant roles: In a state of sonder, each of us is at once a hero, a supporting cast member, and an extra in overlapping stories.";

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.mainTitle}>{mainTitle}</Text>
            <View style={styles.divider} />
            <Text style={styles.wordTitle}>{word}</Text>
            <Text style={styles.partOfSpeech}>{partOfSpeech}</Text>
            <Text style={styles.definition}>{definition}</Text>
        </View>
    );
}
