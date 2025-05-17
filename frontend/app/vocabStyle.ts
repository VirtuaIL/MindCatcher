import { StyleSheet } from 'react-native';

const CARD_BACKGROUND_COLOR = '#5F3DC4';
const TEXT_COLOR = '#FFFFFF';
const LIGHT_TEXT_COLOR = '#E0D8F7';

export const emotionalVocabularyCardStyles = StyleSheet.create({
    cardContainer: {
        backgroundColor: CARD_BACKGROUND_COLOR,
        borderRadius: 25,
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
        textAlign: 'left',
        textTransform: 'uppercase',
        marginBottom: 8,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 20,
    },
    wordTitle: {
        color: TEXT_COLOR,
        fontSize: 26,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    partOfSpeech: {
        color: LIGHT_TEXT_COLOR,
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 12,
    },
    definition: {
        color: LIGHT_TEXT_COLOR,
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'justify',
    },
});
