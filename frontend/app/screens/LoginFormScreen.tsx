import {
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from "expo-checkbox";
import type {DrawerScreenProps} from "@react-navigation/drawer";
import {DrawerParamList} from "@/app/types";
import React, { useState } from "react";
import { styles, appWhite, lightPurple, lightPurple2, darkPurple, darkPurple2 } from '../loginFormScreenStyle';

type Props = DrawerScreenProps<DrawerParamList, 'Login'>;
const { height } = Dimensions.get('window');

export default function LoginFormScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        console.log('Próba logowania:', { username, password, rememberMe });
    };

    return (
        <View style={styles.screen}>
            <View style={styles.topBackgroundSection}>
                <Image source={require('../../assets/images/baner.jpg')} style={styles.baner} />
            </View>
            <LinearGradient
                colors={['#ecb2ff', '#FF8AF5', '#f427f8']}
                style={styles.bottomBackgroundSection}
                start={{ x: 0, y: 0.8 }}
                end={{ x: 1, y: 0 }}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoidingContainer}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.loginCard}>
                        <View style={styles.iconOuterContainer}>
                            <View style={styles.iconCircleBackground}>
                                <Image source={require('../../assets/images/login.png')} style={styles.padlockImage} />
                            </View>
                        </View>
                        <Text style={styles.title}>Zaloguj się teraz</Text>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Username *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your Username"
                                placeholderTextColor="#BDBDBD"
                                value={username}
                                onChangeText={setUsername}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your Password"
                                placeholderTextColor="#BDBDBD"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>
                        <View style={styles.rememberMeContainer}>
                            <Checkbox
                                style={styles.checkbox}
                                value={rememberMe}
                                onValueChange={setRememberMe}
                                color={rememberMe ? '#29ABE2' : '#A0A0A0'}
                            />
                            <Text style={styles.rememberMeText}>Remember me</Text>
                        </View>
                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={styles.loginButtonText}>ZALOGUJ SIĘ</Text>
                        </TouchableOpacity>
                        <View style={styles.linksContainer}>
                            <TouchableOpacity onPress={() => console.log('Nawiguj do Rejestracji')}>
                                <Text style={styles.linkText}>Nie masz konta?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('Nawiguj do Resetowania Hasła')}>
                                <Text style={styles.linkText}>Zapomniałeś hasła?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}
