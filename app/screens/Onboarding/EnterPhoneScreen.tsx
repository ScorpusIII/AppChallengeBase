import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Linking,
    TextInput,
    ActivityIndicator
} from 'react-native'
import { auth } from "../../../firebaseConfig";
import { signInWithPhoneNumber, onAuthStateChanged, ConfirmationResult } from "firebase/auth";

const EnterPhoneScreen = () => {

    const [phone, setPhone] = useState(''); // Default phone number
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState<ConfirmationResult>();
    // verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, handleAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    // Handle the button press
    async function handleSignInWithPhoneNumber() {
        setLoading(true);
        const confirmation = await signInWithPhoneNumber(auth, phone);
        setConfirm(confirmation);
        setLoading(false);
    }

    async function confirmCode() {
        try {
            if (confirm)
                await confirm.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    // Handle login
    function handleAuthStateChanged(user: any) {
        if (user) {
            // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
            // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
            // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
            // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>What's Your #?</Text>

                <TextInput
                    style={styles.phoneNumber}
                    placeholder="+1 (512) 777-7777"
                    placeholderTextColor={'#778899'}
                    keyboardType="phone-pad"
                    onChangeText={setPhone}
                    value={phone}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignInWithPhoneNumber} disabled={loading}>
                    <Text style={styles.buttonText}>Confirm</Text>
                    {loading && <ActivityIndicator style={styles.spinner} size={16} color={'white'} />}
                </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>
                By tapping on “Confirm” you agree to the Y’all
                <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}> Terms of Service </Text>
                and
                <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/privacy')}> Privacy Policy</Text>,
                and consent to receiving text messages from us. Message and data rates apply.
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#011627'
    },
    backArrow: {
        marginTop: 70,
        marginLeft: 30,
    },
    content: {
        marginHorizontal: 40,
        marginTop: 50,
    },
    title: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
        marginTop: 100,
        marginBottom: 15,
        marginLeft: 20,
        fontFamily: 'Obviously',
    },
    phoneNumber: {
        fontSize: 32,
        fontWeight: '400',
        fontFamily: 'Gill-Sans',
        color: '#778899',
        marginBottom: 30,
    },
    areaCode: {
        color: '#ffffff',
        fontWeight: '500',
        fontSize: 23,
        fontFamily: 'Gill-Sans',
    },
    button: {
        backgroundColor: '#0082CB',
        paddingVertical: 12,
        borderRadius: 14,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Obviously',
    },
    spinner: {
        marginLeft: 20,
    },
    footerText: {
        fontSize: 12,
        color: '#ccc',
        textAlign: 'center',
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        fontFamily: 'Montserrat',
        fontWeight: '400',
    },
    link: {
        color: '#60A5FA'
    }
})

export default EnterPhoneScreen