import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://somawebapp.firebaseio.com',
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
}

firebase.initializeApp(firebaseConfig);
export let database = firebase.database();
