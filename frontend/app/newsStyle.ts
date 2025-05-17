import { StyleSheet } from "react-native";


const darkPurple = '#5F3DC4';

export const newsStyles = StyleSheet.create({
    newsCardImageContainer: {
        backgroundColor: darkPurple,
        borderRadius: 25,
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginHorizontal: 16,
        marginTop: 32,
        width: '90%',
        alignSelf: 'center',
    },
    newsCardImageHeader: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        paddingLeft: 10,
        textTransform: 'uppercase',
    },
    newsCardImageContentBox: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 25,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 100,
        marginBottom: 15,
    },
    newsCardImageTitle: {
        color: darkPurple,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    newsCardImageReadMoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    newsCardImageReadMoreText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginRight: 5,
        textTransform: 'uppercase',
    },
    newsCardImageReadMoreIcon: {
        color: 'white',
    },
});
