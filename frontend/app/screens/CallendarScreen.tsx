import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '@/app/types';
import AppBar from "@/app/components/AppBar";
import { Calendar } from 'react-native-calendars';
import UserData from "@/app/model/user";
import {useUser} from "@/app/UserContext";
import {JournalData} from "@/app/model/journal";

type Props = DrawerScreenProps<DrawerParamList, 'Calendar'>;

export default function CalendarScreen({ navigation }: Props) {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [searchQuery, setSearchQuery] = useState('');
    const [expanded, setExpanded] = useState<number | null>(null);
    const { userId, setUserId } = useUser();
    const [entries, setEntries] = useState<JournalData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const questions = [
        "What had happened?",
        "What thoughts did i have?",
        "How did i feel?",
        "How did i react?",
        "Were my thoughts helpful and realistic?",
        "How could i have reacted differently?",
        "How do i feel now?"
    ]

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `http://10.254.68.47:8000/journals/${userId}/${selectedDate.toISOString().split('T')[0]}/`
                );

                if (!response.ok) {
                    setEntries([]);
                    throw new Error('Network response was not ok');
                }

                const json = await response.json();
                console.log(json)
                // Assuming `json` is an array of journal entries
                const journalEntries = json.map(
                    (entry: any) =>
                        new JournalData(entry.id, entry.user_id, entry.content, entry.date)
                );
                setEntries(journalEntries);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            setLoading(false);
            setError(null);
        };
    }, [selectedDate, userId]); // <-- refetch when date or user changes

    const toggleExpand = (index: number) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <ScrollView>
        <View style={styles.mainComponent}>
            <AppBar navigation={navigation} title="Calendar" />
            <View style={styles.innerWrapper}>
                {/*<View style={styles.searchWrapper}>*/}
                {/*    <TextInput*/}
                {/*        placeholder="Search"*/}
                {/*        style={styles.searchInput}*/}
                {/*        value={searchQuery}*/}
                {/*        onChangeText={setSearchQuery}*/}
                {/*    />*/}
                {/*    {searchQuery.length > 0 && (*/}
                {/*        <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>*/}
                {/*            <FontAwesome5 name="times-circle" size={16} color="#333" />*/}
                {/*        </TouchableOpacity>*/}
                {/*    )}*/}
                {/*</View>*/}
                <View style={styles.searchWrapper}>
                    <TextInput
                        placeholder="Search"
                        style={styles.searchInput}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
                        <FontAwesome5 name="times-circle" size={16} color="#333" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.searchHint}>Emotion, situation, reaction, etc.</Text>

                <View style={styles.datePickerWrapper}>
                    <Text style={styles.dateLabel}>Select date</Text>
                    <Calendar
                        current={selectedDate.toISOString().split('T')[0]}
                        onDayPress={(day) => setSelectedDate(new Date(day.dateString))}
                        markedDates={{
                            [selectedDate.toISOString().split('T')[0]]: { selected: true, selectedColor: '#5F3DC4' },
                        }}
                        theme={{
                            selectedDayBackgroundColor: '#5F3DC4',
                            todayTextColor: '#5F3DC4',
                            arrowColor: '#5F3DC4',
                            textSectionTitleColor: '#3C1E88',
                            textDayFontWeight: 'bold',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: 'bold',
                        }}
                        style={styles.calendar}
                    />
                </View>
                <View style={styles.entriesWrapper}>
                    {entries.map((entry, index) => (
                        <TouchableOpacity key={index} style={styles.entry} onPress={() => toggleExpand(index)}>
                            {expanded === index ? (
                                // Rozwinięte - pokaż wszystko
                                entry.content.map((textPiece, idx) => (
                                    <View style={styles.entryElement} key={idx}>
                                        <Text style={styles.entryText}>{textPiece}</Text>
                                        <Text style={styles.question}>{questions[idx]}</Text>
                                        <View style={styles.horizontalLine} />
                                    </View>
                                ))
                            ) : (
                                // Zwinięte - pokaż tylko pierwsze pytanie + odpowiedź
                                <View style={styles.entryElement}>
                                    <Text style={styles.entryText}>{entry.content[0]}</Text>
                                    <Text style={styles.question}>{questions[0]}</Text>
                                </View>
                            )}
                            <FontAwesome5
                                name={expanded === index ? 'chevron-up' : 'chevron-down'}
                                size={16}
                                color="white"
                                style={{ position: 'absolute', right: 16, top: 16 }}
                            />
                        </TouchableOpacity>
                    ))}


                    {/*{entries.map((entry, index) => {*/}
                    {/*    return(*/}
                    {/*    <TouchableOpacity key={index} style={styles.entry} onPress={() => toggleExpand(index)}>*/}
                    {/*        <Text style={styles.entryText} numberOfLines={expanded === index ? undefined : 2}>*/}
                    {/*            {entry.content.map((textPiece, idx) => (*/}
                    {/*                <View style = {styles.entryElement}>*/}
                    {/*                <Text*/}
                    {/*                    key={idx}*/}
                    {/*                    style={styles.entryText}*/}
                    {/*                    numberOfLines={expanded === index ? undefined : 2}*/}
                    {/*                >*/}
                    {/*                    {textPiece}*/}
                    {/*                </Text>*/}
                    {/*                <Text style={styles.question}>*/}
                    {/*                    {questions[idx]}*/}
                    {/*                </Text>*/}
                    {/*                    <View style={styles.horizontalLine}></View>*/}
                    {/*                </View>*/}
                    {/*            ))}*/}
                    {/*        </Text>*/}
                    {/*        <FontAwesome5*/}
                    {/*            name={expanded === index ? 'chevron-up' : 'chevron-down'}*/}
                    {/*            size={16}*/}
                    {/*            color="white"*/}
                    {/*            style={{position: 'absolute', right: 16, top: 16}}*/}
                    {/*        />*/}
                    {/*    </TouchableOpacity>*/}
                    {/*    );*/}
                    {/*})}*/}
                </View>

            </View>
            <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Form')}>
                <FontAwesome5 name="plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    entryElement: {
        flexDirection: "column",
        flexWrap:"nowrap"
    },
    horizontalLine: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    mainComponent: {
        flex: 1,
        backgroundColor: '#EADDFF',
        alignItems: 'center',
    },
    question:{
        fontSize: 16,
    },
    innerWrapper: {
        width: '90%',
        flex: 1,
        paddingBottom: 80,
    },
    searchWrapper: {
        position: 'relative',
        width: '100%',
        marginTop: 32,
    },
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        paddingRight: 40, // Miejsce na ikonkę X
    },
    clearButton: {
        position: 'absolute',
        right: 16,
        top: '50%',
        transform: [{ translateY: -8 }],
    },

    searchHint: {
        color: '#3C1E88',
        fontSize: 12,
        marginVertical: 8,
    },
    datePickerWrapper: {
        marginTop: 16,
    },
    dateLabel: {
        color: '#3C1E88',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,
        alignSelf: 'center',
    },
    calendar: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 8,
        padding: 8,
    },
    entriesWrapper: {
        marginTop: 32,
    },
    entry: {
        backgroundColor: '#5F3DC4',
        padding: 16,
        borderRadius: 20,
        marginBottom: 32,
        position: 'relative',
    },
    entryText: {
        color: 'white',
        fontSize: 16,
    },
    fab: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        backgroundColor: '#5F3DC4',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});
