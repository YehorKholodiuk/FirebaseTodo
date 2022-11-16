import { initializeApp } from "firebase/app";
import firestore from "firebase/firestore"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcWzQ-vwliG-dfTzDcUzao05rSWLZL3Jg",
    authDomain: "todo-becec.firebaseapp.com",
    projectId: "todo-becec",
    storageBucket: "todo-becec.appspot.com",
    messagingSenderId: "635133040582",
    appId: "1:635133040582:web:16f76964f2d9c4098b04c7"
};

// Initialize Firebase
const connectFirebase = initializeApp(firebaseConfig);
const db = getFirestore(connectFirebase)
//console.log(connectFirebase)
export default db;
