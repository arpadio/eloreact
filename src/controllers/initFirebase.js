import {initializeApp} from 'firebase/app'

const config = {
  apiKey: "AIzaSyBXaqqLD07K97SknzNrgkr1LVtVMD5zyss",
  authDomain: "arpadio-3b99d.firebaseapp.com",
  databaseURL: "https://arpadio-3b99d.firebaseio.com",
  storageBucket: "arpadio-3b99d.appspot.com",
  messagingSenderId: "782130103264"
};

// Load firebasejs before app.js
const realtimeDB = initializeApp(config);

// Set the reference to the Firebase database
export const dbRef = realtimeDB.database().ref();
