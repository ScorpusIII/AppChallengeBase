import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'tamagui';
import { colors } from '../../theme/colors';

/**
 * OnboardingHeader Component
 * 
 * This component displays the header for onboarding screens including:
 * - App logo
 * - Welcome text
 * - Subtitle text
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Optional subtitle text
 */
const OnboardingHeader: React.FC<{
  title: string;
  subtitle?: string;
}> = ({ title, subtitle }) => {
  // TODO: Implement the onboarding header with logo and text
  return (
    <View style={styles.container}>
      {/* App Logo */}
      <View style={styles.logoContainer}>
        {/* TODO: Add logo image here */}
      </View>
      
      {/* Title Text */}
      <Text style={styles.title}>{title}</Text>
      
      {/* Subtitle Text (if provided) */}
      {subtitle ? (
        <Text style={styles.subtitle}>{subtitle}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});

export default OnboardingHeader;