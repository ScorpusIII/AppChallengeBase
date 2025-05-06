import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseApp } from '../../../shared/services/firebase/Index';
import { recaptchaConfig } from '../../../shared/services/firebase/Config';

/**
 * RecaptchaVerifier Component
 * 
 * A component that renders the Firebase reCAPTCHA verification modal for phone authentication.
 * This is required for phone authentication to work properly on both web and native platforms.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onVerify - Function called when reCAPTCHA is verified
 * @param {Function} props.onError - Function called when an error occurs
 * @param {Function} props.onLoad - Function called when reCAPTCHA is loaded
 */
const RecaptchaVerifier: React.FC<{
  onVerify?: (token: string) => void;
  onError?: (error: Error) => void;
  onLoad?: () => void;
}> = ({ onVerify, onError, onLoad }) => {
  // Reference to the reCAPTCHA verifier
  const recaptchaVerifier = useRef(null);

  /**
   * Initialize and handle the reCAPTCHA events
   */
  useEffect(() => {
    // Call the onLoad callback when the component mounts
    if (onLoad) {
      onLoad();
    }

    return () => {
      // Clean up if needed
    };
  }, [onLoad]);

  return (
    <View style={styles.container}>
      {/* 
        FirebaseRecaptchaVerifierModal is used for native platforms (iOS/Android)
        For web, you'll need to use a different approach 
      */}
      {Platform.OS !== 'web' && (
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseApp.options}
          // Use the site key from the config
          // @ts-ignore - Type mismatch in library
          siteKey={recaptchaConfig.siteKey}
          theme={recaptchaConfig.theme}
          onVerify={onVerify}
          onError={onError}
          attemptInvisibleVerification={recaptchaConfig.size === 'invisible'}
        />
      )}
      
      {/* 
        For web platform, you'll need to render a different reCAPTCHA implementation
        This requires a DOM element to attach the reCAPTCHA
      */}
      {Platform.OS === 'web' && (
        <View id="recaptcha-container" style={styles.webRecaptchaContainer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // The container is mostly invisible
    width: 0,
    height: 0,
  },
  webRecaptchaContainer: {
    // For web platform
    width: 300,
    height: 60,
  },
});

export default RecaptchaVerifier;