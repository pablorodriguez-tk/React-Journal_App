import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRhct52D-DgsMgwGR545k0QpV-sUCiReA",
  authDomain: "react-journal-app-a6891.firebaseapp.com",
  projectId: "react-journal-app-a6891",
  storageBucket: "react-journal-app-a6891.appspot.com",
  messagingSenderId: "674763713061",
  appId: "1:674763713061:web:1c3a9a22d70bb394d0edcc",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
