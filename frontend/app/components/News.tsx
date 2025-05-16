import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";
import {NewsData} from "../model/news";

export default function News() {
    const [data, setData] = useState<NewsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {

                const response = await fetch('http://10.254.68.47:8000/news/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }


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


        // Cleanup function to handle component unmounting
        return () => {
            setLoading(false);
            setError(null);
        };
    }, []);

    if (loading) {
        return (
            <View style={styles.newsCard}>
                <Text style={{ color: 'black' }}>Data loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.newsCard}>
                <Text style={{ color: 'black' }}>Error during loading data: {error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.newsCard}>
            {data ? (
                <>
                    <Text style={styles.newsTitle}>{data.title}</Text>
                    <Text style={styles.newsDescription}>{data.description}</Text>
                    <Text style={{ color: 'black', textAlign: 'right' }}>Author: {data.author}</Text>
                    <Text style={{ color: 'black', textAlign: 'right' }}>Date: {data.publishedAt}</Text>
                </>
            ) : (
                <Text style={{ color: 'black' }}>No data.</Text>
            )}
        </View>
    );
}
