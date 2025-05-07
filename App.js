import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
// import { TamaguiProvider, View, getConfig } from '@tamagui/core';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import config from './tamagui.config';
import { RootStackParamList } from './types';
import EnterPhoneScreen from './app/screens/Onboarding/EnterPhoneScreen';
import EnterCodeScreen from './app/screens/Onboarding/EnterCodeScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
// console.log(`config is`, getConfig());
const Stack = createStackNavigator();

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
            console.log('App is ready, hiding splash screen...');
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <NavigationContainer onLayout={onLayoutRootView}>
            {/* <TamaguiProvider config={config}> */}
            <Stack.Navigator initialRouteName="EnterPhone">
                <Stack.Screen name="EnterPhone" component={EnterPhoneScreen} />
                <Stack.Screen name="EnterCode" component={EnterCodeScreen} />
            </Stack.Navigator>
            {/* </TamaguiProvider> */}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003256',
    }
});