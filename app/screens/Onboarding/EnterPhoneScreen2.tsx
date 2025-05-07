// PhoneConfirmScreen.js (without Tamagui)
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
      <View style={styles.innerContainer}>
        <Text style={styles.backArrow}>{'<'}</Text>

        <View style={styles.content}>
          <Text style={styles.title}>What's Your #?</Text>
          <Text style={styles.phoneNumber}>
            +1 <Text style={styles.areaCode}>(512)</Text> 777-7777
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
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011627'
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between'
  },
  backArrow: {
    fontSize: 26,
    color: 'white'
  },
  content: {
    alignItems: 'center',
    marginTop: 50
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
    marginBottom: 15
  },
  phoneNumber: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    marginBottom: 30
  },
  areaCode: {
    color: '#778899'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
  footerText: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'center'
  },
  link: {
    color: '#60A5FA'
  }
})

export default EnterPhoneScreen2