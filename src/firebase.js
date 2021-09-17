import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyChRY69x_ZAsPLcq3vATaYGkCSXtqBf6BE",
    authDomain: "messenger-clone-react-633b1.firebaseapp.com",
    projectId: "messenger-clone-react-633b1",
    storageBucket: "messenger-clone-react-633b1.appspot.com",
    messagingSenderId: "480042646568",
    appId: "1:480042646568:web:bc6923b131432b1a55891d",
    measurementId: "G-MTRPXTQ0K4"
  
});

const db = firebaseApp.firestore();

export default  db ;