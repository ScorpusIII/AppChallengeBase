/**
 * Phone Authentication Service
 * 
 * Handles phone number authentication with Firebase Auth.
 * Includes reCAPTCHA verification for web and fallback methods for native.
 */

import { Platform } from 'react-native';
import { firebaseAuth } from './Index';
import { recaptchaConfig } from './Config';

/**
 * PhoneAuthService class for handling phone authentication
 */
class PhoneAuthService {
  constructor() {
    this.verificationId = null;
    this.recaptchaVerifier = null;
  }

  /**
   * Initialize reCAPTCHA verifier (for web platform)
   * @param {string} containerOrId - DOM container or ID for reCAPTCHA widget
   * @returns {Promise<void>}
   */
  initRecaptchaVerifier(containerOrId) {
    if (Platform.OS === 'web') {
      // Web implementation
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(containerOrId, {
        size: recaptchaConfig.size,
        theme: recaptchaConfig.theme,
        callback: () => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log('reCAPTCHA verified');
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          console.log('reCAPTCHA expired');
        }
      });
    }
    // For native platforms, reCAPTCHA is handled automatically by the Firebase SDK
  }

  /**
   * Send verification code to phone number
   * @param {string} phoneNumber - Phone number with country code (e.g., +12345678900)
   * @returns {Promise<object>} Result object with success flag and verification ID
   */
  async sendVerificationCode(phoneNumber) {
    try {
      if (!phoneNumber) {
        throw new Error('Phone number is required');
      }

      // Use different approach based on platform
      let confirmation;
      
      if (Platform.OS === 'web' && this.recaptchaVerifier) {
        // Web needs recaptcha verifier
        confirmation = await firebaseAuth.signInWithPhoneNumber(
          phoneNumber, 
          this.recaptchaVerifier
        );
      } else {
        // Native platforms
        confirmation = await firebaseAuth.signInWithPhoneNumber(phoneNumber);
      }
      
      this.verificationId = confirmation.verificationId;
      
      return {
        success: true,
        verificationId: this.verificationId
      };
    } catch (error) {
      console.error('Error sending verification code:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Verify the code sent to the user's phone
   * @param {string} verificationCode - The verification code received via SMS
   * @param {string} verificationId - The verification ID (if not using the stored one)
   * @returns {Promise<object>} Authentication result
   */
  async verifyCode(verificationCode, verificationId = null) {
    try {
      if (!verificationCode) {
        throw new Error('Verification code is required');
      }

      const vid = verificationId || this.verificationId;
      
      if (!vid) {
        throw new Error('Verification ID not found. Please request a new code.');
      }

      // Create credential with verification ID and code
      const credential = firebaseAuth.PhoneAuthProvider.credential(
        vid,
        verificationCode
      );

      // Sign in with the credential
      const userCredential = await firebaseAuth.signInWithCredential(credential);
      
      return {
        success: true,
        user: userCredential.user
      };
    } catch (error) {
      console.error('Error verifying code:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Reset stored verification data
   */
  reset() {
    this.verificationId = null;
    if (this.recaptchaVerifier && typeof this.recaptchaVerifier.clear === 'function') {
      this.recaptchaVerifier.clear();
      this.recaptchaVerifier = null;
    }
  }
}

export default new PhoneAuthService();