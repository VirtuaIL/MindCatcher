import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ChartImageScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/krzychuasset.png')}
                style={styles.chartImage}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        // marginTop: 16,
    },
    chartImage: {
        width: '100%',
        height: 250,
    },
});
