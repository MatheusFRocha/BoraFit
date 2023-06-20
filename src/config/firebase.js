
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBZl0hJ8oSFI7uJZpeNf5lcFbEe4b7YSGw",
    authDomain: "authentication-978f1.firebaseapp.com",
    projectId: "authentication-978f1",
    storageBucket: "authentication-978f1.appspot.com",
    messagingSenderId: "718780372279",
    appId: "1:718780372279:web:a395aba0594040164276b2"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
