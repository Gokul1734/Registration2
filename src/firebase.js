
import firebase from 'firebase/app';
import 'firebase/auth';

// Your Firebase configuration

const firebaseConfig = {
 apiKey: "AIzaSyBYG5GT_XQ1tmDXRAQdz0jhNB3WCVOspcY",
 authDomain: "registration-7a969.firebaseapp.com",
 projectId: "registration-7a969",
 storageBucket: "registration-7a969.appspot.com",
 messagingSenderId: "374839140738",
 appId: "1:374839140738:web:3d4fc8969b865d5e1e6f9b",
 measurementId: "G-XCGPC00VM7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
