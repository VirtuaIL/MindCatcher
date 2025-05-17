// app/components/AiSection.tsx
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Keyboard,
    LayoutAnimation,
    Platform,
    UIManager,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { aiSectionStyles as styles, AIPALETTE } from '../aiSectionStyle';
import {Thought} from "@/app/model/thought";

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Funkcja do komunikacji z rzeczywistym API backendu
const analyzeThoughtAPI = async (thought: string): Promise<string> => {
    const thoughtMod = new Thought(thought);

    const response = await fetch('http://10.254.68.47:8000/distortion/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(thoughtMod),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Unknown API error" }));
        throw new Error(errorData.message || `API error: ${response.status}`);
    }

    const data = await response.json();
// Założenie, że API zwraca obiekt z kluczem 'response' zawierającym odpowiedź modelu
    if (!data.response) {
        throw new Error("Invalid API response format: 'response' field missing.");
    }
    return data.response;
};

export default function AiSection() {
    const [inputText, setInputText] = useState('');
    const [apiResponse, setApiResponse] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isResponseAreaVisible, setIsResponseAreaVisible] = useState(false);

    const configureLayoutAnimation = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };

    const handleAnalyze = async () => {
        if (!inputText.trim()) return;

        Keyboard.dismiss();
        setIsLoading(true);
        setApiResponse(null);

        configureLayoutAnimation();
        setIsResponseAreaVisible(true);

        try {
            // Wywołanie funkcji komunikującej się z backendem
            const response = await analyzeThoughtAPI(inputText);
            setApiResponse(response);
        } catch (error) {
            console.error("API Error:", error);
            setApiResponse(error instanceof Error ? error.message : "An unknown error occurred. Please try again.");
        } finally {
            configureLayoutAnimation();
            setIsLoading(false);
            setInputText('');
        }
    };

    const handleClearInput = () => {
        setInputText('');
    };

    const handleClearResponse = () => {
        configureLayoutAnimation();
        setApiResponse(null);
        setInputText('');
    };

    const handleCollapseResponse = () => {
        configureLayoutAnimation();
        setIsResponseAreaVisible(false);
        setApiResponse(null);
    };

    const handleLearnMore = () => {
        console.log("Learn More pressed");
        alert("Learn More functionality to be implemented!");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>COGNITIVE DISTORTION</Text>

            <TouchableOpacity style={styles.learnMoreButton} onPress={handleLearnMore}>
                <Text style={styles.learnMoreButtonText}>LEARN MORE</Text>
            </TouchableOpacity>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Write your thought"
                    placeholderTextColor={AIPALETTE.textInputPlaceholder}
                    value={inputText}
                    onChangeText={setInputText}
                    multiline
                />
                {inputText.length > 0 && (
                    <TouchableOpacity onPress={handleClearInput} style={styles.clearButton}>
                        <MaterialCommunityIcons name="close-circle" size={22} color={AIPALETTE.iconColor} />
                    </TouchableOpacity>
                )}
            </View>

            <TouchableOpacity
                style={styles.analyzeButton}
                onPress={handleAnalyze}
                disabled={isLoading || !inputText.trim()}
            >
                <Text style={styles.analyzeButtonText}>ANALYZE</Text>
            </TouchableOpacity>

            {isResponseAreaVisible && (
                <View style={styles.responseAreaWrapper}>
                    {isLoading ? (
                        <View style={styles.loadingIndicatorContainer}>
                            <ActivityIndicator size="large" color={AIPALETTE.primaryPurple} />
                            <Text style={styles.loadingText}>Analyzing your thought...</Text>
                        </View>
                    ) : apiResponse ? (
                        <View style={styles.responseBox}>
                            <Text style={styles.responseText}>{apiResponse}</Text>
                        </View>
                    ) : null}

                    {!isLoading && (
                        <View style={styles.responseActionsContainer}>
                            {apiResponse && (
                                <TouchableOpacity style={styles.responseActionButton} onPress={handleClearResponse}>
                                    <Text style={styles.responseActionButtonText}>CLEAR TEXT</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={styles.responseActionButton} onPress={handleCollapseResponse}>
                                <Text style={styles.responseActionButtonText}>COLLAPSE</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            )}
        </View>
    );
}
