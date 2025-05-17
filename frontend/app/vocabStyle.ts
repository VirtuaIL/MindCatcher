import { StyleSheet } from 'react-native';

const CARD_BACKGROUND_COLOR = '#5F3DC4'; // Główny fioletowy kolor tła karty
const TEXT_COLOR = '#FFFFFF';             // Kolor tekstu (biały)
const LIGHT_TEXT_COLOR = '#E0D8F7';     // Jaśniejszy kolor dla "noun" i definicji

export const emotionalVocabularyCardStyles = StyleSheet.create({
    cardContainer: {
        backgroundColor: CARD_BACKGROUND_COLOR,
        borderRadius: 25, // Mocno zaokrąglone rogi jak na obrazku
        paddingVertical: 25,
        paddingHorizontal: 20,
        marginHorizontal: 16,
        marginVertical: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    mainTitle: {
        color: TEXT_COLOR,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left', // Wyrównanie do lewej jak na obrazku
        textTransform: 'uppercase',
        marginBottom: 8,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Półprzezroczysta biała linia
        marginBottom: 20,
    },
    wordTitle: {
        color: TEXT_COLOR,
        fontSize: 26, // Większy font dla słowa
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    partOfSpeech: {
        color: LIGHT_TEXT_COLOR,
        fontSize: 14,
        fontStyle: 'italic', // Kursywa dla "noun"
        marginBottom: 12,
    },
    definition: {
        color: LIGHT_TEXT_COLOR,
        fontSize: 15,
        lineHeight: 22, // Dla lepszej czytelności
        textAlign: 'justify', // Justowanie tekstu definicji
    },
});
