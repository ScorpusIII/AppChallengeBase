import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Linking
} from 'react-native'

const EnterPhoneScreen2 = () => {
    const handleConfirm = () => {
        // You can add logic for confirmation here
        alert('Phone number confirmed!')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.backArrow}>{'<'}</Text>

            <View style={styles.content}>
                <Text style={styles.title}>What's Your #?</Text>
                <Text style={styles.phoneNumber}>
                    <Text style={styles.areaCode}>+1</Text> (512) 777-7777
                </Text>

                <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                    <Text style={styles.buttonText}>Confirm</Text>
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
        fontSize: 16,
        color: 'white',
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
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Obviously',
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

export default EnterPhoneScreen2