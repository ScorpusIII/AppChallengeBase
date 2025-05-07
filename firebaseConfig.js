import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth, RecaptchaVerifier } from "firebase/auth";
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBs3bQ0INxTWtKM6TKF3x3dEMczjWqOiQQ',
  authDomain: 'hey-yall-cb4f7.firebaseapp.com',
  databaseURL: 'https://hey-yall-cb4f7.firebaseio.com',
  projectId: 'hey-yall-cb4f7',
  storageBucket: 'hey-yall-cb4f7.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:925529678828:android:165627393e0ee485d016c9',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export { auth, RecaptchaVerifier };