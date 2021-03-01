// Firebase App (the core Firebase SDK) is always required and must be listed first
const firebase = require('firebase');
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics"; // TODO

// Add the Firebase products that you want to use
// import "firebase/auth"; // TODO
import "firebase/firestore"; 
 
 const firebaseConfig = {
    apiKey: "AIzaSyAezV9ZNQMdKp5PyMkEFwfysgRE15sVH9M",
    authDomain: "flymobile-a642e.firebaseapp.com",
    projectId: "flymobile-a642e",
    storageBucket: "flymobile-a642e.appspot.com",
    messagingSenderId: "245696444377",
    appId: "1:245696444377:web:92a3d077f115775315cbc8"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
