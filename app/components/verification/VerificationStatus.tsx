import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text } from 'tamagui';
import { colors } from '../../theme/colors';

/**
 * Verification status types
 */
export type VerificationStatusType = 'idle' | 'sending' | 'sent' | 'verifying' | 'success' | 'error';

/**
 * VerificationStatus Component
 * 
 * A component that displays the current status of the verification process.
 * 
 * @param {Object} props - Component props
 * @param {VerificationStatusType} props.status - Current verification status
 * @param {string} props.message - Optional custom message to display
 * @param {string} props.error - Error message (when status is 'error')
 */
const VerificationStatus: React.FC<{
  status: VerificationStatusType;
  message?: string;
  error?: string;
}> = ({ status, message, error }) => {
  /**
   * Get the appropriate status message based on the current status
   */
  const getStatusMessage = (): string => {
    if (message) return message;
    
    switch (status) {
      case 'sending':
        return 'Sending verification code...';
      case 'sent':
        return 'Verification code sent! Check your messages.';
      case 'verifying':
        return 'Verifying code...';
      case 'success':
        return 'Verification successful!';
      case 'error':
        return error || 'An error occurred. Please try again.';
      default:
        return '';
    }
  };

  /**
   * Get the appropriate status color based on the current status
   */
  const getStatusColor = (): string => {
    switch (status) {
      case 'success':
        return colors.text.success;
      case 'error':
        return colors.text.error;
      default:
        return colors.text.secondary;
    }
  };

  // Don't render anything if status is idle and no message is provided
  if (status === 'idle' && !message) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Loading indicator for processing states */}
      {(status === 'sending' || status === 'verifying') && (
        <ActivityIndicator 
          size="small" 
          color={colors.spinner}
          style={styles.spinner}
        />
      )}

      {/* Status Message */}
      <Text style={[
        styles.message,
        { color: getStatusColor() }
      ]}>
        {getStatusMessage()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
  },
  spinner: {
    marginRight: 10,
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default VerificationStatus;