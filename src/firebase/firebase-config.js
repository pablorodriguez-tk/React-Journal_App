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

const firebaseConfigTesting = {
  apiKey: "AIzaSyBQtWuhfYx3ykQs3ShuYj5jKXP__ogG2Rw",
  authDomain: "sql-demos-e1c6b.firebaseapp.com",
  databaseURL: "https://sql-demos-e1c6b-default-rtdb.firebaseio.com",
  projectId: "sql-demos-e1c6b",
  storageBucket: "sql-demos-e1c6b.appspot.com",
  messagingSenderId: "961257930460",
  appId: "1:961257930460:web:0c95887698b3d034c4be19",
  measurementId: "G-R1YWZZ8CVT",
};

if (process.env.NODE_ENV === "test") {
  //test
  firebase.initializeApp(firebaseConfigTesting);
} else {
  //dev / prod
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
