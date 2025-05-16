import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    // Twoje style
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
        backgroundColor: "#EADDFF",
    },

    // Style interfejsu streak/journal
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D1B3FF',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#ccc',
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
        backgroundColor: '#5F3DC4',
        margin: 16,
        marginTop: 42,
        padding: 16,
        borderRadius: 20,
        width: '90%',
    },
    streakTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 6,
        // textAlign: 'center',
    },
    streakContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    circle: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        color: '#5F3DC4',
        fontSize: 24,
        fontWeight: 'bold',
    },
    square: {
        backgroundColor: '#3C1E88',
        width: 100,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareText: {
        color: 'white',
        fontSize: 24,
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
        color: '#5F3DC4',
        fontWeight: 'bold',
    },
});
