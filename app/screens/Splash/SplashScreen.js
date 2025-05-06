import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'tamagui';
import { colors } from '../../theme/colors';

/**
 * Splash Screen Component
 * 
 * TODO: Implement a splash screen that displays the app logo and transitions to
 * the authentication flow after a short delay.
 * 
 * Requirements:
 * - Display the app logo (app/assets/icons/yall_logo.png)
 * - Add a suitable animation or transition effect
 * - Navigate to the PhoneLogin screen after a short delay
 */
const SplashScreen = ({ navigation }) => {
  // Add your implementation here
  
  return (
    <View style={styles.container}>
      <Text>Implement Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
  },
});

export default SplashScreen;