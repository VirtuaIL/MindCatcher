import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from '../styles';
import AppBar from '../components/AppBar';
import StreakCard from '../components/StreakCard';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import News from "../components/News";
import WellbeingTrackerCard from "@/app/components/WellbeingTrackerCard";
import UserData from "../model/user"
import AiSection from "../components/AiSection";
import EmotionalVocabularyCard from "@/app/components/VocabCard";

type Props = DrawerScreenProps<DrawerParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    const [data, setData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {

                const response = await fetch("http://10.254.68.47:8000/users/1");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }


                const json = await response.json();
                console.log(json)
                const apiData: UserData = new UserData(json.id, json.username, json.password, json.streak, json.streak_record);
                setData(apiData);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function to handle component unmounting
        return () => {
            setLoading(false);
            setError(null);
        };
    }, []);

    // TU VARIABLE Z USERA SĄ NIE USUWAĆ TEGO PLS
    useEffect(() => {
        if(!data) return
        if(data.streak === null){
            data.streak = 0;
        }
        if(data.streak_record === null){
            data.streak_record = 0;
        }
    }, [data]);

    if (loading) {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.mainComponent}>
                    <Text style={{ color: 'black', paddingTop: 30, fontSize:42}}>Loading...</Text>
                </View>
            </ScrollView>
        );
    }

    if (error) {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.mainComponent}>
                    <Text style={{ color: 'black' }}>Could not connect...</Text>
                </View>
            </ScrollView>
        );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Najczęstsze ustawienie
            style={styles.keyboardAvoidingContainer}

        >
            <ScrollView contentContainerStyle={styles.scrollContentContainer}  keyboardShouldPersistTaps="handled">
                <View style={styles.mainComponent}>
                    <AppBar navigation={navigation} />
                    <StreakCard streak={data.streak} streakRecord={data.streak_record} />
                    <WellbeingTrackerCard />
                    <News />
                    <AiSection />
                    <EmotionalVocabularyCard/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}
