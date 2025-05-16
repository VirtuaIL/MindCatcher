import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import AppBar from '../components/AppBar';
import StreakCard from '../components/StreakCard';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';

type Props = DrawerScreenProps<DrawerParamList, 'Home'>;

export default function FormScreen({ navigation }: Props) {
    return (
        <View style={styles.mainComponent}>
            <AppBar navigation={navigation} />
            
        </View>
    );
}
