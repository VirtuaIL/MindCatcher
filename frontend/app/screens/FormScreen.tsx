import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { styles } from '../styles';
import AppBar from '../components/AppBar';
import StreakCard from '../components/StreakCard';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
// import FormSliderCard from "@/app/components/FormSliderCard";
import FeelingsSelector from "@/app/components/FeelingsSelector";
import MoodSlider from "@/app/components/MoodSlider";
import MoodSlider2 from "@/app/components/MoodSlider2";

import { ScrollView } from 'react-native-gesture-handler';

type Props = DrawerScreenProps<DrawerParamList, 'Form'>;

let feelings: {[key:string] : boolean} = {}

export default function FormScreen({ navigation }: Props) {

    const handleFeelingsChange = (selectedFeelings: {[key:string] : boolean}) => {
        feelings = selectedFeelings;
    }

    return (
        <View style={styles.mainComponent}>
            <AppBar navigation={navigation} />
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                {/*<MoodSlider label="Overall mood" icon="😃" />*/}
                {/*<MoodSlider label={"Mood"}/>*/}
                <MoodSlider/>
                <MoodSlider2/>
                <FeelingsSelector onSendData={handleFeelingsChange} />

                {/*<TouchableOpacity style={localstyles.saveButton} onPress={() => onSave()}>*/}
                {/*    <Text style={localstyles.saveButtonText}>Save</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity style={localstyles.saveButton} onPress={() => onSave()}>
                    <Text style={localstyles.saveButtonText}>ADD</Text>
                </TouchableOpacity>

            </ScrollView>



        </View>
    );
}

function onSave() {
    console.log(feelings);
}

const localstyles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 32,
        // textAlign: 'center',
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#5F3DC4',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 20,
        // marginRight: 8,
        width: '30%',
        alignSelf: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
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
