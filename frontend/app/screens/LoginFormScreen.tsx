import {
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Image,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from "expo-checkbox";
import type {DrawerScreenProps} from "@react-navigation/drawer";
import {DrawerParamList} from "@/app/types";
import React, {useEffect, useState } from "react";
import { styles } from '../loginFormScreenStyle';
import {LoginRequest} from "../model/login";
import { useUser } from '../UserContext';
import { useNavigation } from "expo-router";

type Props = DrawerScreenProps<DrawerParamList, 'Login'>;
const { height } = Dimensions.get('window');

export default function LoginFormScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    const { userId, setUserId } = useUser();
    const navigation = useNavigation();

    useEffect(() => {
        if (userId) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }]
            });
        }
    }, [userId]);


    const handleLogin = async () => {
            const loginRequest = new LoginRequest(username, password);



            try {
                const response = await fetch('http://10.254.68.47:8000/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loginRequest),
                });

                console.log('Username:', username);
                console.log('Password:', password);

                if (!response.ok) {
                    console.log('Błąd logowania');
                    return;
                }

                const data = await response.json().then((response) => {
                    setUserId(response.user_id);
                    console.log('User ID globalny:', {response});
                })
                console.log('Zalogowano pomyślnie:', data);
                console.log('User ID globalny:', {userId});
            } catch (error) {
                console.log('Błąd połączenia:', error);
            }
        };

    return (
        <LinearGradient
            colors={['#21005d', '#d0bcff', '#4f378a']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 1, y: 0 }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoidingContainer}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.loginCard}>
                        
                        <Text style={styles.title}>Login now</Text>
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
                            <Text style={styles.loginButtonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <View style={styles.linksContainer}>
                            <TouchableOpacity onPress={() => console.log('Navigate to Sign Up')}>
                                <Text style={styles.linkText}>Don't have an account?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('Navigate to Forgot Password')}>
                                <Text style={styles.linkText}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}
