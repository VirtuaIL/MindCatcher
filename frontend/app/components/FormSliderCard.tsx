import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function JournalEntryCard({ onSave, onCancel }: { onSave: (text: string) => void, onCancel: () => void }) {
    const [entry, setEntry] = useState('');

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder="Today I..."
                    placeholderTextColor="#999"
                    multiline
                    value={entry}
                    onChangeText={setEntry}
                />
                <TouchableOpacity onPress={onCancel}>
                    <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.saveButton} onPress={() => onSave(entry)}>
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
    card: {
        backgroundColor: '#FFF6FF',
        borderRadius: 16,
        padding: 16,
        margin: 16,
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
        marginTop: 2,
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
