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

import { ScrollView } from 'react-native';
import { FormRequest } from '../model/FormRequest';

type Props = DrawerScreenProps<DrawerParamList, 'Form'>;

let feelings: [{name: string, value: boolean}];
let mood: number = 0;
let sleep: number = 0;

export default function FormScreen({ navigation }: Props) {

    const handleSaveForm = async () => {
        const formRequest = new FormRequest(1, mood, sleep, feelings);
        console.log(formRequest);
        try {
            const response = await fetch("http://10.254.68.47:8000/forms/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formRequest),
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


    const handleFeelingsChange = (selectedFeelings: { [key: string]: boolean }) => {
        const feelingsArray = Object.keys(selectedFeelings).map((key) => ({
            name: key,
            value: selectedFeelings[key],
        }));

        feelings = feelingsArray;

        console.log(feelings); // Optional: debug
    };


    const onMoodChange = (value: number) => {
        mood = value;
    }

    const onSleepChange = (value: number) => {
        sleep = value;
    }

    return (
        <View style={styles.mainComponent}>
            <AppBar navigation={navigation} />
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                {/*<MoodSlider label="Overall mood" icon="😃" />*/}
                {/*<MoodSlider label={"Mood"}/>*/}
                <MoodSlider onChange={onMoodChange}/>
                <MoodSlider2 onChange={onSleepChange}/>
                <FeelingsSelector onSendData={handleFeelingsChange} />

                {/*<TouchableOpacity style={localstyles.saveButton} onPress={() => onSave()}>*/}
                {/*    <Text style={localstyles.saveButtonText}>Save</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity style={localstyles.saveButton} onPress={() => handleSaveForm()}>
                    <Text style={localstyles.saveButtonText}>ADD</Text>
                </TouchableOpacity>

            </ScrollView>



        </View>
    );
}

const localstyles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 16,
        // textAlign: 'center',
        alignItems: 'center',
    },
    saveButton: {
        paddingTop: 16,
        backgroundColor: '#5F3DC4',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 20,
        // marginRight: 8,
        width: '30%',
        alignSelf: 'center',
        marginTop: 16,
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
