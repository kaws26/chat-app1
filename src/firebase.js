// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBGsfosem2-_LU9NQTQ_JbYbXQA1FanCgs",
    authDomain: "genaiworksop.firebaseapp.com",
    projectId: "genaiworksop",
    storageBucket: "genaiworksop.appspot.com",
    messagingSenderId: "836230527033",
    appId: "1:836230527033:web:0928145168e8bb6fd575e8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
