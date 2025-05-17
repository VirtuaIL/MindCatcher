import { StyleSheet } from 'react-native';

export const AIPALETTE = {
    primaryPurple: '#5F3DC4',        // Main dark purple for title, "Learn More" button bg
    lightPurpleInputBg: '#E1D5FF',  // Background for the input field (matches image)
    veryLightPurpleButtonBg: '#F0EBFF', // Background for "Analyze" button & response action buttons
    containerBg: '#FAF7FF',          // Main container background (very light lavender)
    textInputPlaceholder: '#8071B3', // Placeholder text color (darker than input bg)
    textInputValue: '#4A2C9D',        // Color for actual typed text & response text
    white: '#FFFFFF',
    iconColor: '#4A2C9D',            // Color for the 'X' clear icon in input
};

export const aiSectionStyles = StyleSheet.create({
    container: {
        backgroundColor: AIPALETTE.containerBg,
        borderRadius: 20,
        padding: 20,
        alignSelf: 'center',
        width: '90%',
        marginHorizontal: 16,
        marginVertical: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: AIPALETTE.primaryPurple,
        textAlign: 'center',
        marginBottom: 12,
        textTransform: 'uppercase',
    },
    learnMoreButton: {
        backgroundColor: AIPALETTE.primaryPurple,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 25,
    },
    learnMoreButtonText: {
        color: AIPALETTE.white,
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AIPALETTE.lightPurpleInputBg,
        borderRadius: 25, // Highly rounded as per image
        paddingHorizontal: 20,
        paddingVertical: 8, // Gives some height
        marginBottom: 20,
        minHeight: 50,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: AIPALETTE.textInputValue,
        paddingVertical: 8, // Adjust for vertical centering if needed
    },
    clearButton: {
        padding: 5, // Clickable area for the icon
        marginLeft: 8,
    },
    analyzeButton: {
        backgroundColor: AIPALETTE.veryLightPurpleButtonBg,
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 25, // Highly rounded
        alignSelf: 'center',
    },
    analyzeButtonText: {
        color: AIPALETTE.primaryPurple,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    responseAreaWrapper: { // Wraps the response box and action buttons
        marginTop: 25, // Space below "Analyze" button
    },
    responseBox: {
        padding: 15,
        backgroundColor: AIPALETTE.white, // White background for response
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AIPALETTE.lightPurpleInputBg, // Light border, can be darker
        minHeight: 100, // Give some space for the text
    },
    responseText: {
        fontSize: 15,
        color: AIPALETTE.textInputValue,
        lineHeight: 22,
    },
    responseActionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end', // Align buttons to the right
        marginTop: 15,
        gap: 10, // Creates space between buttons if using flex-end
    },
    responseActionButton: {
        backgroundColor: AIPALETTE.veryLightPurpleButtonBg,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    responseActionButtonText: {
        color: AIPALETTE.primaryPurple,
        fontSize: 13,
        fontWeight: '600', // Semi-bold
    },
    loadingIndicatorContainer: {
        minHeight: 100, // Match responseBox minHeight
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AIPALETTE.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AIPALETTE.lightPurpleInputBg,
        padding: 15,
    },
    loadingText: {
        marginTop: 10,
        color: AIPALETTE.primaryPurple,
        fontSize: 14,
    }
});
