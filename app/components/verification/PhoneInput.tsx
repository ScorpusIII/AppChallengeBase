import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Text } from 'tamagui';
import { colors } from '../../theme/colors';

/**
 * PhoneInput Component
 * 
 * A component for entering and validating phone numbers during authentication.
 * Features:
 * - Country code selection
 * - Phone number validation
 * - Error messaging
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Function called when a valid number is submitted
 * @param {boolean} props.loading - Whether to show loading state
 */
const PhoneInput: React.FC<{
  onSubmit: (phoneNumber: string) => void;
  loading?: boolean;
}> = ({ onSubmit, loading = false }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default to US
  const [error, setError] = useState('');

  /**
   * Validates phone number format
   * @returns {boolean} Whether the phone number is valid
   */
  const validatePhoneNumber = (): boolean => {
    // TODO: Implement phone number validation
    // This is a very basic validation, improve as needed
    const fullNumber = `${countryCode}${phoneNumber}`;
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    return phoneRegex.test(fullNumber);
  };

  /**
   * Handles submission of the phone number
   */
  const handleSubmit = () => {
    if (validatePhoneNumber()) {
      setError('');
      onSubmit(`${countryCode}${phoneNumber}`);
    } else {
      setError('Please enter a valid phone number');
    }
  };

  return (
    <View style={styles.container}>
      {/* TODO: Implement a country code picker/dropdown */}
      <View style={styles.inputContainer}>
        {/* Country Code Input */}
        <TextInput
          style={styles.countryCodeInput}
          value={countryCode}
          onChangeText={setCountryCode}
          keyboardType="phone-pad"
          editable={!loading}
        />
        
        {/* Phone Number Input */}
        <TextInput
          style={styles.phoneInput}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Phone number"
          keyboardType="phone-pad"
          autoCompleteType="tel"
          editable={!loading}
        />
      </View>

      {/* Error Message */}
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}

      {/* Submit Button */}
      <TouchableOpacity
        style={[
          styles.submitButton,
          loading && styles.submitButtonDisabled
        ]}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={styles.submitButtonText}>
          {loading ? 'Sending...' : 'Send Verification Code'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  countryCodeInput: {
    borderWidth: 1,
    borderColor: colors.border.default,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: 60,
    fontSize: 16,
    textAlign: 'center',
  },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border.default,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginLeft: 10,
  },
  errorText: {
    color: colors.text.error,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: colors.button.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: colors.button.disabled,
  },
  submitButtonText: {
    color: colors.text.onPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PhoneInput;