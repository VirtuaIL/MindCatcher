import React, { useEffect, useState } from "react";
import { Linking, Text, TouchableOpacity, View, Animated, Easing } from "react-native";
import { newsStyles } from "../newsStyle";
import { NewsData } from "../model/news";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function News() {
    const [data, setData] = useState<NewsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expanded, setExpanded] = useState(false);
    const rotateAnim = useState(new Animated.Value(0))[0];

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('http://10.254.68.47:8000/news/');
                if (!response.ok) throw new Error('Network response was not ok');
                const json = await response.json();
                const apiData: NewsData = new NewsData(json.id, json.author, json.title, json.description, json.url, json.publishedAt, json.content);
                setData(apiData);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleToggle = () => {
        setExpanded((prev) => !prev);
        Animated.timing(rotateAnim, {
            toValue: expanded ? 0 : 1,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.linear,
        }).start();
    };

    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    if (loading || error || !data) {
        return (
            <View style={newsStyles.newsCardImageContainer}>
                <Text style={{ color: 'black' }}>
                    {loading ? "Data loading..." : error ? `Error: ${error}` : "No news available at the moment."}
                </Text>
            </View>
        );
    }

    return (
        <View style={newsStyles.newsCardImageContainer}>
            <Text style={newsStyles.newsCardImageHeader}>WORLD IS MUCH BETTER THAN IT SEEMS</Text>
            <View style={newsStyles.newsCardImageContentBox}>
                <Text style={newsStyles.newsCardImageTitle}>
                    {data.title ? data.title : 'TITLE(PLACEHOLDER)'}
                </Text>
                <TouchableOpacity onPress={handleToggle} style={{ alignItems: 'center', marginTop: 10 }}>
                    <View style={{
                        width: 36, height: 36, borderRadius: 18, backgroundColor: '#EADDFF',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Animated.View style={{ transform: [{ rotate }] }}>
                            <MaterialCommunityIcons name="chevron-down" size={28} color="#5F3DC4" />
                        </Animated.View>
                    </View>
                </TouchableOpacity>
                {expanded && (
                    <View style={{ marginTop: 16, alignItems: 'center' }}>
                        <Text style={{ color: '#5F3DC4', fontWeight: 'bold', marginBottom: 4 }}>{data.author}</Text>
                        <Text style={{ color: '#333', marginBottom: 4 }}>{data.description}</Text>
                        <Text style={{ color: '#888', fontSize: 12 }}>{data.publishedAt}</Text>
                    </View>
                )}
            </View>
            <TouchableOpacity
                style={newsStyles.newsCardImageReadMoreContainer}
                onPress={() => data.url && Linking.openURL(data.url)}
                disabled={!data.url}
            >
                <Text style={newsStyles.newsCardImageReadMoreText}>READ MORE</Text>
                <MaterialCommunityIcons name="arrow-right" size={20} style={newsStyles.newsCardImageReadMoreIcon} />
            </TouchableOpacity>
        </View>
    );
}
