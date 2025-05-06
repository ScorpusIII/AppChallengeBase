import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'tamagui';
import { colors } from '../../theme/colors';

/**
 * OnboardingNavigation Component
 * 
 * This component provides navigation buttons for onboarding screens:
 * - Next/Continue button
 * - Back/Skip button (optional)
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onNext - Function to call when Next/Continue is pressed
 * @param {Function} props.onBack - Function to call when Back is pressed (optional)
 * @param {boolean} props.showBack - Whether to show the Back button (default: true)
 * @param {string} props.nextText - Text for the Next button (default: "Continue")
 * @param {string} props.backText - Text for the Back button (default: "Back")
 * @param {boolean} props.isLastStep - Whether this is the last step in onboarding (changes button text to "Get Started")
 */
const OnboardingNavigation: React.FC<{
  onNext: () => void;
  onBack?: () => void;
  showBack?: boolean;
  nextText?: string;
  backText?: string;
  isLastStep?: boolean;
}> = ({
  onNext,
  onBack,
  showBack = true,
  nextText = "Continue",
  backText = "Back",
  isLastStep = false,
}) => {
  // TODO: Implement navigation buttons for onboarding flow
  return (
    <View style={styles.container}>
      {/* Back/Skip Button */}
      {showBack && onBack && (
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={onBack}
        >
          <Text style={styles.backButtonText}>{backText}</Text>
        </TouchableOpacity>
      )}
      
      {/* Next/Continue Button */}
      <TouchableOpacity 
        style={styles.nextButton}
        onPress={onNext}
      >
        <Text style={styles.nextButtonText}>
          {isLastStep ? "Get Started" : nextText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  nextButton: {
    backgroundColor: colors.button.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
  },
  nextButtonText: {
    color: colors.text.onPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: colors.text.secondary,
    fontSize: 16,
  },
});

export default OnboardingNavigation;