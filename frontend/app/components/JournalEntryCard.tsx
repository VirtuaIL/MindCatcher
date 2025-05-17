import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useUser} from "@/app/UserContext";

export default function JournalEntryCard({ onSave, onCancel }: { onSave: (text: string) => void, onCancel: () => void }) {

    const [whatHappened, setWhatHappened] = useState('');
    const [thoughts, setThoughts] = useState('');
    const [feelings, setFeelings] = useState('');
    const [reactions, setReactions] = useState('');
    const [helpfulThoughts, setHelpfulThoughts] = useState('');
    const [differentReactions, setDifferentReactions] = useState('');
    const [feelingNow, setFeelingNow] = useState('');
    const { userId, setUserId } = useUser();

    let entryData: [string] = ["", "", "", "", "", "", ""];

    const getJournalJson = () => {
        const data = {
            user_id: userId,
            content: entryData
        }
        return JSON.stringify(data);
    }

    useEffect(() => {
        entryData = [
            whatHappened,
            thoughts,
            feelings,
            reactions,
            helpfulThoughts,
            differentReactions,
            feelingNow
        ];
    }, [whatHappened, thoughts, feelings, reactions, helpfulThoughts, differentReactions, feelingNow]);

    return (
        <View style={styles.card}>
            <Text>What had happened?</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder="Today I..."
                    placeholderTextColor="#999"
                    multiline
                    value={whatHappened}
                    onChangeText={setWhatHappened}
                />
                <TouchableOpacity onPress={onCancel}>
                    <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
            </View>
            <Text>What thoughts did I have? </Text>
            <View style={styles.horizontalLine} />
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder="Today I..."
                    placeholderTextColor="#999"
                    multiline
                    value={thoughts}
                    onChangeText={setThoughts}
                />
                <TouchableOpacity onPress={onCancel}>
                    <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
            </View>
            <Text>How did I feel?</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder="Today I..."
                    placeholderTextColor="#999"
                    multiline
                    value={feelings}
                    onChangeText={setFeelings}
                />
                <TouchableOpacity onPress={onCancel}>
                    <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
            </View>
            <Text>How did I react?</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder="Today I..."
                    placeholderTextColor="#999"
                    multiline
                    value={reactions}
                    onChangeText={setReactions}
                />
                <TouchableOpacity onPress={onCancel}>
                    <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
            </View>
            <Text>Were my thoughts helpful and realistic?</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder="Today I..."
                    placeholderTextColor="#999"
                    multiline
                    value={helpfulThoughts}
                    onChangeText={setHelpfulThoughts}
                />
                <TouchableOpacity onPress={onCancel}>
                    <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
            </View>
            <Text>How could I have reacted differently?</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder="Today I..."
                    placeholderTextColor="#999"
                    multiline
                    value={differentReactions}
                    onChangeText={setDifferentReactions}
                />
                <TouchableOpacity onPress={onCancel}>
                    <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
            </View>
            <Text>How do i feel now?</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder="Today I..."
                    placeholderTextColor="#999"
                    multiline
                    value={feelingNow}
                    onChangeText={setFeelingNow}
                />
                <TouchableOpacity onPress={onCancel}>
                    <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.saveButton} onPress={() => onSave(getJournalJson())}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    horizontalLine: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#FFF6FF',
        borderRadius: 16,
        padding: 16,
        margin: 16,
        marginTop: 32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        width: '90%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#F8F8F8',
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 4,
        color: '#333',
    },
    closeIcon: {
        fontSize: 18,
        color: '#333',
        marginLeft: 8,
        marginTop: -12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 16,
    },
    saveButton: {
        backgroundColor: '#5F3DC4',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginRight: 8,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    cancelButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    cancelButtonText: {
        color: '#333',
    },
});
