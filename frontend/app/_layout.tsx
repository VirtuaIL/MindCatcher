import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { UserProvider } from './UserContext';
import { Platform } from "react-native";
import * as SystemUI from 'expo-system-ui';

export default function RootLayout() {
  useEffect(() => {

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
