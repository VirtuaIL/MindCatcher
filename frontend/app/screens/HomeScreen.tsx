import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles';
import AppBar from '../components/AppBar';
import StreakCard from '../components/StreakCard';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import News from "../components/News";
import WellbeingTrackerCard from "@/app/components/WellbeingTrackerCard";
import UserData from "../model/user"

type Props = DrawerScreenProps<DrawerParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    const [data, setData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    let streak = 0;
    let streakRecord = 0;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {

                const response = await fetch('http://10.254.68.47:8000/users/1');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }


                const json = await response.json();

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

    useEffect(() => {
        console.log(data);
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.mainComponent}>
                <AppBar navigation={navigation} />
                <StreakCard streak={streak} streakRecord={streakRecord} />
                <WellbeingTrackerCard />
                <News />

            </View>
        </ScrollView>
    );
}
