import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
// import { TamaguiProvider, View } from '@tamagui/core'
// import config from './tamagui.config'

import EnterPhoneScreen from './app/screens/Onboarding/EnterPhoneScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts
                await Font.loadAsync({
                    'Montserrat': require('./app/assets/fonts/Montserrat.ttf'),
                    'Montserrat-Bold': require('./app/assets/fonts/Montserrat-Bold.ttf'),
                });

                // Artificial delay for splash screen demonstration
                // await new Promise(resolve => setTimeout(resolve, 2000));
                await SplashScreen.hideAsync();

            } catch (e) {
                console.warn('Error loading assets:', e);
            }
        }

        prepare();
    }, []);

    return (
        // <TamaguiProvider config={config}>
            <EnterPhoneScreen />
        // </TamaguiProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003256',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingHorizontal: 20,
    }
});