/**
 * Firebase Configuration
 * 
 * This file contains the Firebase configuration details for phone authentication.
 * 
 * IMPORTANT: To complete the challenge, you will need to:
 * 1. Create a Firebase project at https://console.firebase.google.com/
 * 2. Enable Phone Authentication in the Firebase console
 * 3. Set up reCAPTCHA verification in the Firebase console
 * 4. Replace the placeholder values below with your actual Firebase config
 * 
 * Documentation:
 * - Firebase setup: https://firebase.google.com/docs/web/setup
 * - Phone auth: https://firebase.google.com/docs/auth/web/phone-auth
 */

// Firebase configuration object
// Replace with your own Firebase project configuration from the Firebase console
export const firebaseConfig = {
  // Your Firebase project's API key
  apiKey: "YOUR_FIREBASE_API_KEY",
  
  // Firebase Auth domain (usually projectid.firebaseapp.com)
  authDomain: "your-project-id.firebaseapp.com",
  
  // Your Firebase project ID
  projectId: "your-project-id",
  
  // Storage bucket URL (usually projectid.appspot.com)
  storageBucket: "your-project-id.appspot.com",
  
  // Your Firebase messaging sender ID (numeric)
  messagingSenderId: "000000000000",
  
  // Your Firebase app ID (from Firebase console)
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxxxxxxxxxx",
  
  // Optional: Your Google Analytics measurement ID
  measurementId: "G-XXXXXXXXXX"
};

/**
 * Web client ID for OAuth authentication (used for Google Sign-In)
 * 
 * This is only needed if you're implementing Google Sign-In.
 * For phone authentication, you can leave this as is.
 */
export const webClientId = "000000000000-xxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com";

/**
 * reCAPTCHA verification settings for phone authentication
 * 
 * IMPORTANT: Phone authentication requires reCAPTCHA verification for security.
 * You'll need to:
 * 1. Get a reCAPTCHA site key from the Firebase console
 * 2. Add your app's domains to the allowed domains list
 */
export const recaptchaConfig = {
  // Your reCAPTCHA site key from Firebase console
  siteKey: "YOUR_RECAPTCHA_SITE_KEY",
  
  // Size of the reCAPTCHA widget
  // 'invisible' - Recommended for better UX (verification happens automatically)
  // 'normal' - Displays the standard reCAPTCHA widget
  size: "invisible",
  
  // Theme color
  // 'light' - Light color theme
  // 'dark' - Dark color theme
  theme: "light"
};

/**
 * Phone authentication specific settings
 * 
 * These settings are used to configure the phone auth experience
 */
export const phoneAuthConfig = {
  // Default country code (e.g., +1 for US)
  defaultCountryCode: "+1",
  
  // Timeout duration for SMS verification codes in seconds
  codeTimeout: 60,
  
  // Whether to use the Firebase app verification for native platforms
  useAppVerification: true
};

export default firebaseConfig;