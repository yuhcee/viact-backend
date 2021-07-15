import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export const firebaseAuthApp = firebase.initializeApp({
  apiKey: 'AIzaSyC8uF32b56SXkPraS5QCWwp8pbvpWkiNMI',
  authDomain: 'viact-backend-a3dbb.firebaseapp.com',
  projectId: 'viact-backend-a3dbb',
  storageBucket: 'viact-backend-a3dbb.appspot.com',
  messagingSenderId: '998284975261',
  appId: '1:998284975261:web:8dbcdec841b45eaa5a0874',
  databaseURL: 'https://viact-backend-a3dbb-default-rtdb.firebaseio.com/',
});
