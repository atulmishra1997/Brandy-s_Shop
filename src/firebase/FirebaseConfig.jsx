// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfbcoy3zOBau6Fo5pG2YmSYPlonOhJq5A",
    authDomain: "brandy-sshop.firebaseapp.com",
    projectId: "brandy-sshop",
    storageBucket: "brandy-sshop.appspot.com",
    messagingSenderId: "959944644346",
    appId: "1:959944644346:web:f8266c19704d5b72071b43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };