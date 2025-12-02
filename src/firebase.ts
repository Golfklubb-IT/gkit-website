import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';
import { getFirestore } from 'firebase/firestore';
// import { connectFunctionsEmulator } from 'firebase/functions';
// import { connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA81DXrTztXQz9eYHeSysneh1fwAzC_GRc",
    authDomain: "golfklubb-it-website.firebaseapp.com",
    projectId: "golfklubb-it-website",
    storageBucket: "golfklubb-it-website.firebasestorage.app",
    messagingSenderId: "186711894198",
    appId: "1:186711894198:web:ecc0a8d12168a38d0c1e17"
};

const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app, 'us-central1'); // Ensure region matches
export const db = getFirestore(app);

// Uncomment to use local emulators during development
// if (location.hostname === 'localhost') {
//     connectFunctionsEmulator(functions, 'localhost', 5001);
//     connectFirestoreEmulator(db, 'localhost', 8080);
// }
