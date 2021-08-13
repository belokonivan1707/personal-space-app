import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBP0HRebomd9AKeyjc-nAfG-t7sDGEqots',
  authDomain: 'personal-space-9112a.firebaseapp.com',
  databaseURL: 'https://personal-space-9112a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'personal-space-9112a',
  storageBucket: 'personal-space-9112a.appspot.com',
  messagingSenderId: '96800415640',
  appId: '1:96800415640:web:64c89128320e2b80bdd5ed',
  measurementId: 'G-Y8ED4KN596',
});

export const auth = app.auth();
export default app;
