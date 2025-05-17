import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles';
import AppBar from '../components/AppBar';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import JournalEntryCard from '../components/JournalEntryCard';
import StreakCard from "@/app/components/StreakCard";
import News from "@/app/components/News";
import { useUser } from '../UserContext';
import {FormRequest} from "@/app/model/FormRequest";


type Props = DrawerScreenProps<DrawerParamList, 'Journal'>;

export default function JournalScreen({ navigation }: Props) {

    const handleSaveForm = async (text) => {
        try {
            const response = await fetch("http://10.254.68.47:8000/journals/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: text,
            });

            if (!response.ok) {
                console.log('Could not send form');
                return;
            }

            const data = await response.json();
            console.log('form sent: ', data);;
        } catch (error) {
            console.log('Connection error:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainComponent}>
            <AppBar navigation={navigation} />
                <JournalEntryCard onSave={handleSaveForm} onCancel={() => console.log('Cancelled')} />
        </View>
        </ScrollView>


    );
}
