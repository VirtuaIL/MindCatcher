import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import AppBar from '../components/AppBar';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import JournalEntryCard from '../components/JournalEntryCard';
import StreakCard from "@/app/components/StreakCard";
import News from "@/app/components/News";

type Props = DrawerScreenProps<DrawerParamList, 'Journal'>;

export default function JournalScreen({ navigation }: Props) {
    return (
        <View style={styles.mainComponent}>
            <AppBar navigation={navigation} />
            <JournalEntryCard onSave={(text) => console.log(text)} onCancel={() => console.log('Cancelled')} />
        </View>
        
        
        
        // Uncomment the following lines to use the JournalEntryCard component
        // <JournalEntryCard onSave={(text) => console.log(text)} onCancel={() => console.log('Cancelled')} />

        // <View style={styles.mainComponent}>
        //     <AppBar navigation={navigation} />
        //     <View style={styles.streakCard}>
        //         <Text>JOURNAL SCREEN</Text>
        //     </View>
        // </View>
    );
}
