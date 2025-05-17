import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Slider } from '@react-native-assets/slider';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDER_WIDTH = SCREEN_WIDTH * 0.8;

export default function MoodSlider2({onChange}: {onChange: (value: number) => void}) {
    const [value, setValue] = useState<number>(50);


    const getMoodEmoji = (val: number) => {
        if (val < 20) return '😴';
        if (val < 40) return '🥱';
        if (val < 60) return '🙂';
        if (val < 80) return '😊';
        return '😁';
    };

    useEffect(() => {
        onChange(value);
    }, [value]);



    const emojiPosition = (value / 100) * SLIDER_WIDTH - 20;

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Sleep Quality</Text>

            <View style={styles.sliderWrapper}>

                <Text style={[styles.emoji, { left: emojiPosition }]}>
                    {getMoodEmoji(value)}
                </Text>

                <Slider
                    style={{ width: SLIDER_WIDTH, height: 40 }}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    value={value}

                    minimumTrackTintColor="#E5D5FF"
                    maximumTrackTintColor="#5F3DC4"
                    thumbTintColor="white"
                    onValueChange={(val: number) => setValue(val)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {

        backgroundColor: '#5F3DC4',
        borderRadius: 20,
        padding: 20,
        margin: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    title: {
        fontSize: 30,

        color: 'white',
        fontWeight: 'bold',
        marginBottom: 36,
    },
    sliderWrapper: {
        width: SLIDER_WIDTH,
        height: 60,
        position: 'relative',
        justifyContent: 'center',
        color: 'white',
    },
    emoji: {
        position: 'absolute',
        top: -35,
        fontSize: 32,
    },
});
