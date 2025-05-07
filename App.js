import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
// import { TamaguiProvider, View, getConfig } from '@tamagui/core';

// import config from './tamagui.config';
import EnterPhoneScreen from './app/screens/Onboarding/EnterPhoneScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
// console.log(`config is`, getConfig());

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts
                await Font.loadAsync({
                    'Montserrat': require('./app/assets/fonts/Montserrat.ttf'),
                    'Montserrat-Bold': require('./app/assets/fonts/Montserrat-Bold.ttf'),
                    'Montserrat-Light': require('./app/assets/fonts/Montserrat-Light.ttf'),
                    'Montserrat-Medium': require('./app/assets/fonts/Montserrat-Medium.ttf'),
                    'Montserrat-SemiBold': require('./app/assets/fonts/Montserrat-SemiBold.ttf'),
                    'Obviously-Black': require('./app/assets/fonts/Obviously-Black.otf'),
                    'Obviously-Bold': require('./app/assets/fonts/Obviously-Bold.otf'),
                    'Obviously-Medium': require('./app/assets/fonts/Obviously-Medium.otf'),
                    'Obviously-Semibold': require('./app/assets/fonts/Obviously-Semibold.otf'),
                    'Obviously': require('./app/assets/fonts/Obviously.otf'),
                    'Gill-Sans': require('./app/assets/fonts/Gill-Sans.otf'),
                });

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
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        // <TamaguiProvider config={config}>
        <View style={styles.container} onLayout={onLayoutRootView}>
            <EnterPhoneScreen />
        </View>
        // </TamaguiProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003256',
    }
});