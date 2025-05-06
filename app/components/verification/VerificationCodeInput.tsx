import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text } from 'tamagui';
import { colors } from '../../theme/colors';

/**
 * VerificationCodeInput Component
 * 
 * A component for entering the verification code received via SMS.
 * Features:
 * - 6-digit code input with auto-focus
 * - Validation and error handling
 * - Resend functionality
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Function called when valid code is submitted
 * @param {Function} props.onResend - Function to trigger code resend
 * @param {boolean} props.loading - Whether to show loading state
 * @param {number} props.codeLength - Length of the verification code (default: 6)
 */
const VerificationCodeInput: React.FC<{
  onSubmit: (code: string) => void;
  onResend: () => void;
  loading?: boolean;
  codeLength?: number;
}> = ({ 
  onSubmit, 
  onResend, 
  loading = false,
  codeLength = 6
}) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(30);

  // TODO: Implement a countdown timer for resend button

  /**
   * Validates the verification code
   * @returns {boolean} Whether the code is valid
   */
  const validateCode = (): boolean => {
    return code.length === codeLength && /^\d+$/.test(code);
  };

  /**
   * Handles code submission
   */
  const handleSubmit = () => {
    if (validateCode()) {
      setError('');
      onSubmit(code);
    } else {
      setError(`Please enter a valid ${codeLength}-digit code`);
    }
  };

  /**
   * Handles resend button press
   */
  const handleResend = () => {
    if (!resendDisabled) {
      onResend();
      // TODO: Start countdown timer
    }
  };

  return (
    <View style={styles.container}>
      {/* Code Input Field */}
      <TextInput
        style={styles.codeInput}
        value={code}
        onChangeText={setCode}
        placeholder={`${codeLength}-digit code`}
        keyboardType="number-pad"
        maxLength={codeLength}
        editable={!loading}
      />

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
          {loading ? 'Verifying...' : 'Verify Code'}
        </Text>
      </TouchableOpacity>

      {/* Resend Button */}
      <TouchableOpacity
        style={styles.resendButton}
        onPress={handleResend}
        disabled={resendDisabled || loading}
      >
        <Text style={[
          styles.resendText,
          (resendDisabled || loading) && styles.resendTextDisabled
        ]}>
          {resendDisabled 
            ? `Resend code in ${resendCountdown}s` 
            : 'Resend code'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  codeInput: {
    borderWidth: 1,
    borderColor: colors.border.default,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 8,
    marginBottom: 15,
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
    marginBottom: 15,
  },
  submitButtonDisabled: {
    backgroundColor: colors.button.disabled,
  },
  submitButtonText: {
    color: colors.text.onPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  resendText: {
    color: colors.text.link,
    fontSize: 14,
  },
  resendTextDisabled: {
    color: colors.text.disabled,
  },
});

export default VerificationCodeInput;