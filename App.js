import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { TamaguiProvider, View, getConfig } from '@tamagui/core';

// import config from './tamagui.config';
import EnterPhoneScreen from './app/screens/Onboarding/EnterPhoneScreen2';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
console.log(`config is`, getConfig());

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

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

            } catch (e) {
                console.warn('Error loading assets:', e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            console.log('App is ready, hiding splash screen...');
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <TamaguiProvider config={config}>
            <View style={styles.container} onLayout={onLayoutRootView}>
                <EnterPhoneScreen />
            </View>
        </TamaguiProvider>
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