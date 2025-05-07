/**
 * Enter Code Screen
 * 
 * TODO: Implement the screen where users enter the verification code
 * they received via SMS during the phone verification process.
 * 
 * Requirements:
 * - Create a UI for entering a verification code
 * - Implement verification code validation
 * - Handle verification success and error states
 * - Navigate to the next screen upon successful verification
 */

import { Ionicons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Linking,
    TextInput,
    Button,
    ActivityIndicator
} from 'react-native'
import { auth } from "../../../firebaseConfig";
import { signInWithPhoneNumber, onAuthStateChanged, ConfirmationResult } from "firebase/auth";

const EnterCodeScreen = () => {

    const [phone, setPhone] = useState(''); // Default phone number
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState<ConfirmationResult>();
    // verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

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
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" style={styles.backArrow} size={16} color={'white'} />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>We sent a code</Text>
                <Text style={styles.subTitle}>to {phone}</Text>

                <TextInput
                    style={styles.phoneNumber}
                    placeholder="12356"
                    placeholderTextColor={'#778899'}
                    keyboardType="phone-pad"
                    onChangeText={setCode}
                    value={code}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignInWithPhoneNumber} disabled={loading}>
                    <Text style={styles.buttonText}>Verify number</Text>
                    {loading && <ActivityIndicator style={styles.spinner} size={16} color={'white'} />}
                </TouchableOpacity>
            </View>

            <Text style={styles.resendText}>
                Didn't get a code
                <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}> resend now </Text>
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
        marginLeft: 20,
        fontFamily: 'Obviously',
    },
    subTitle: {
        fontSize: 11,
        color: '#80919D',
        fontWeight: '300',
        marginTop: 10,
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
    resendText: {
        fontSize: 12,
        color: '#ccc',
        fontFamily: 'Montserrat',
        fontWeight: '400',
    },
    link: {
        color: '#60A5FA'
    }
})

export default EnterCodeScreen