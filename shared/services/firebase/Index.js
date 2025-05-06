/**
 * Firebase service initialization
 * 
 * This file initializes Firebase and exports the Firebase app instance.
 */

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { firebaseConfig } from './Config';

// Initialize Firebase if it hasn't been initialized yet
let firebaseApp;

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app();
}

// Export Firebase modules
export const firebaseAuth = auth();
export { firebaseApp };

export default firebase;