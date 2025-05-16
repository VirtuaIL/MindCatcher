import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
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
        {/* Ustawia ikony paska stanu na jasne (białe), co jest odpowiednie dla ciemnego tła */}
        <StatusBar style="light" />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </>
  );
}
