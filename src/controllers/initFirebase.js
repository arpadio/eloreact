
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics"


const firebaseConfig = {
  apiKey: "AIzaSyDEwOD8DjlkPr0TZZFeT9Ar47ymrH9r33g",
  authDomain: "arpadio-react.firebaseapp.com",
  projectId: "arpadio-react",
  storageBucket: "arpadio-react.appspot.com",
  messagingSenderId: "477129220295",
  appId: "1:477129220295:web:6b063ec3f881eb17b69ee2",
  measurementId: "G-R2ZJQ1BV59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
