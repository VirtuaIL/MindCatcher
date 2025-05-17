import { StyleSheet } from "react-native";


let appWhite = '#fafffa';
let lightPurple = '#EADDFF'
let lightPurple2 = '#D1B3FF'
let darkPurple = '#5F3DC4'
let darkPurple2 = '#3C1E88'

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 10,
        color: "white",
    },
    mainComponent: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: lightPurple,
        paddingBottom: 16,
    },

    // Style interfejsu streak/journal
    appbarWrapper: {
        width: '100%',
        // paddingHorizontal: 16,
        paddingTop: 62,
        alignItems: 'center',
    },
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: lightPurple2,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        width: '90%',
        // maxWidth: 400,
        // marginLeft: 32,
        // marginRight: 32,
    },
    appbarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },

    icon: {
        fontSize: 20,
    },
    streakCard: {
        backgroundColor: darkPurple,
        margin: 16,
        marginTop: 32,
        padding: 16,
        paddingBottom: 32,
        borderRadius: 20,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    newsCard: {
        backgroundColor: appWhite,
        margin: 16,
        marginTop: 0,
        padding: 16,
        borderRadius: 20,
        width: '90%',
        textAlign: 'justify',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    streakTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        // textAlign: 'center',
    },
    newsTitle: {
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    newsUrl:{
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'justify',
    },
    newsDescription: {
        color: 'black',
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'justify',
    },
    streakContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    circle: {
        backgroundColor: appWhite,
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        color: darkPurple,
        fontSize: 48,
        fontWeight: 'bold',
    },
    square: {
        backgroundColor: darkPurple2,
        width: 100,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareText: {
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold',
    },
    journalCard: {
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 20,
        padding: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    journalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    journalText: {
        fontSize: 16,
        marginBottom: 16,
    },
    journalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    journalButton: {
        color: darkPurple,
        fontWeight: 'bold',
    },
    loginForm:{
        width: '80%',
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 10,
        color: "white",
    },
    wellbeingCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 16,
        marginTop: 16,
        width: '90%',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    wellbeingButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    wellbeingTextContainer: {
        marginBottom: 16,
    },
    wellbeingTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 8,
    },
    wellbeingSubtitle: {
        fontSize: 16,
        color: '#666666',
    },
    wellbeingDivider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginBottom: 20,
    },
    wellbeingButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wellbeingButton: {
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    wellbeingGradeButton: {
        backgroundColor: '#6200EE',
        marginRight: 8,
    },
    wellbeingGradeButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    wellbeingJournalButton: {
        backgroundColor: '#D1C4E9',
        marginLeft: 8,
    },
    wellbeingJournalButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
