import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import { useRoute } from '@react-navigation/native';

type Props = {
    navigation: DrawerNavigationProp<DrawerParamList>;
};

export default function AppBar({ navigation }: Props) {
    const route = useRoute();

    return (
        <View style={styles.appbarWrapper}>
            <View style={styles.appbar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <MaterialCommunityIcons name="menu" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.appbarTitle}>{route.name}</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="account-circle-outline" size={24} color="#333" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
