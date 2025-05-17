import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { UserProvider } from './UserContext';
import { Platform } from "react-native";
import * as SystemUI from 'expo-system-ui';

export default function RootLayout() {
  useEffect(() => {
    // Ustawienie koloru tła paska nawigacji (Android) i ogólnego tła systemowego
    // na czarny, aby pasował do ciemnego motywu.
    SystemUI.setBackgroundColorAsync("black");
  }, []);

  return (
      <>
        <UserProvider>
            <StatusBar style="light" />
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </UserProvider>

      </>
  );
}
