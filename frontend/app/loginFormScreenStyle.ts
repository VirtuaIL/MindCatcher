import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export const appWhite = '#fafffa';
export const lightPurple = '#EADDFF';
export const lightPurple2 = '#D1B3FF';
export const darkPurple = '#5F3DC4';
export const darkPurple2 = '#3C1E88';

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: appWhite,
    },
    topBackgroundSection: {
        height: height * 0.45,
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    topGraphicPlaceholder: {
        flex: 1,
        backgroundColor: '#B2EBF2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderTextForGraphic: {
        color: '#00796B',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    baner: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bottomBackgroundSection: {
        height: height * 0.55,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    keyboardAvoidingContainer: {
        flex: 1,
        zIndex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
    loginCard: {
        width: '90%',
        maxWidth: 400,
        backgroundColor: 'white',
        borderRadius: 25,
        paddingHorizontal: 25,
        paddingBottom: 25,
        paddingTop: 60,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10,
        marginTop: height * 0.08,
    },
    iconOuterContainer: {
        position: 'absolute',
        top: -45,
        alignItems: 'center',
        width: '100%',
    },
    iconCircleBackground: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: appWhite,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 15,
    },
    padlockIconPlaceholder: {
        fontSize: 40,
        color: '#F0FFF0',
    },
    padlockImage: {
        width: 110,
        height: 110,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: darkPurple2,
        marginBottom: 35,
        marginTop: 10,
        textAlign: 'center',
    },
    inputGroup: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#616161',
        marginBottom: 8,
        marginLeft: 5,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#333333',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30,
        paddingLeft: 5,
    },
    checkbox: {
        marginRight: 10,
        width: 22,
        height: 22,
        borderRadius: 5,
    },
    rememberMeText: {
        fontSize: 15,
        color: '#424242',
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: darkPurple,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 25,
        paddingHorizontal: 5,
    },
    linkText: {
        fontSize: 14,
        color: darkPurple2,
        fontWeight: '500',
    },
});