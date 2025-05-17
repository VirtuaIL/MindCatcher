import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import JournalScreen from './screens/JournalScreen';
import { DrawerParamList } from './types';
import { TextStyle } from 'react-native';
import FormScreen from "./screens/FormScreen";
import LoginFormScreen from "./screens/LoginFormScreen";
import CallendarScreen from "@/app/screens/CallendarScreen";

const Drawer = createDrawerNavigator<DrawerParamList>();

function CustomDrawerContent(props: any) {
    const currentRoute = props.state.routeNames[props.state.index];

    const getLabelStyle = (routeName: string): TextStyle => ({
        fontWeight: currentRoute === routeName ? 'bold' as 'bold' : 'normal' as 'normal',
    });


    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 42 }}>
            {/* Close button */}
            <View style={{ paddingHorizontal: 16, marginBottom: 10, marginTop: 10 }}>
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                    <MaterialCommunityIcons name="close" size={24} color="#3C1E88" />
                </TouchableOpacity>
            </View>

            {/* DrawerItems z pogrubieniem aktywnej pozycji */}
            <DrawerItem
                label="Home"
                icon={() => <MaterialCommunityIcons name="star-outline" size={24} color="#3C1E88" />}
                focused={currentRoute === 'Home'}
                activeBackgroundColor="#E5D5FF"
                activeTintColor="#5F3DC4"
                inactiveTintColor="#3C1E88"
                labelStyle={getLabelStyle('Home')}
                onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
                label="Journal"
                icon={() => <MaterialCommunityIcons name="star-outline" size={24} color="#3C1E88" />}
                focused={currentRoute === 'Journal'}
                activeBackgroundColor="#E5D5FF"
                activeTintColor="#5F3DC4"
                inactiveTintColor="#3C1E88"
                labelStyle={getLabelStyle('Journal')}
                onPress={() => props.navigation.navigate('Journal')}
            />
            <DrawerItem
                label="Calendar"
                icon={() => <MaterialCommunityIcons name="star-outline" size={24} color="#3C1E88" />}
                focused={currentRoute === 'Calendar'}
                activeBackgroundColor="#E5D5FF"
                activeTintColor="#5F3DC4"
                inactiveTintColor="#3C1E88"
                labelStyle={getLabelStyle('Calendar')}
                onPress={() => props.navigation.navigate('Calendar')}
            />
            {/*<DrawerItem*/}
            {/*    label="History"*/}
            {/*    icon={() => <MaterialCommunityIcons name="star-outline" size={24} color="#3C1E88" />}*/}
            {/*    focused={currentRoute === 'History'}*/}
            {/*    activeBackgroundColor="#E5D5FF"*/}
            {/*    activeTintColor="#5F3DC4"*/}
            {/*    inactiveTintColor="#3C1E88"*/}
            {/*    labelStyle={getLabelStyle('History')}*/}
            {/*    onPress={() => {}}*/}
            {/*/>*/}
            {/*<DrawerItem*/}
            {/*    label="Quest"*/}
            {/*    icon={() => <MaterialCommunityIcons name="star-outline" size={24} color="#3C1E88" />}*/}
            {/*    focused={currentRoute === 'Quest'}*/}
            {/*    activeBackgroundColor="#E5D5FF"*/}
            {/*    activeTintColor="#5F3DC4"*/}
            {/*    inactiveTintColor="#3C1E88"*/}
            {/*    labelStyle={getLabelStyle('Quest')}*/}
            {/*    onPress={() => {}}*/}
            {/*/>*/}
            <DrawerItem
                label="Form"
                icon={() => <MaterialCommunityIcons name="star-outline" size={24} color="#3C1E88" />}
                focused={currentRoute === 'Form'}
                activeBackgroundColor="#E5D5FF"
                activeTintColor="#5F3DC4"
                inactiveTintColor="#3C1E88"
                labelStyle={getLabelStyle('Form')}
                onPress={() => props.navigation.navigate('Form')}
            />
            <DrawerItem
                label="Login"
                icon={() => <MaterialCommunityIcons name="star-outline" size={24} color="#3C1E88" />}
                focused={currentRoute === 'Login'}
                activeBackgroundColor="#E5D5FF"
                activeTintColor="#5F3DC4"
                inactiveTintColor="#3C1E88"
                labelStyle={getLabelStyle('Login')}
                onPress={() => props.navigation.navigate('Login')}
            />

        </DrawerContentScrollView>
    );
}

export default function Index() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {width: 240},

            }
            }>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Journal" component={JournalScreen} />
            <Drawer.Screen name="Form" component={FormScreen} />
            <Drawer.Screen name="Login" component={LoginFormScreen} />
            <Drawer.Screen name="Calendar" component={CallendarScreen} />
            {/*<Drawer.Screen name="History" component={HistoryScreen} />*/}
            {/*<Drawer.Screen name="Quest" component={QuestScreen} />*/}

            {/* Uncomment the following lines to add History and Quest screens */}
            {/*<Drawer.Screen name="History" component={HistoryScreen} />*/}
            {/*<Drawer.Screen name="Quest" component={QuestScreen} />*/}
            {/*<Drawer.Screen name="History" component={HistoryScreen} />*/}
            {/*<Drawer.Screen name="Quest" component={QuestScreen} />*/}

        </Drawer.Navigator>
    );
}
