import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBZl0hJ8oSFI7uJZpeNf5lcFbEe4b7YSGw",
    authDomain: "authentication-978f1.firebaseapp.com",
    projectId: "authentication-978f1",
    storageBucket: "authentication-978f1.appspot.com",
    messagingSenderId: "718780372279",
    appId: "1:718780372279:web:a395aba0594040164276b2"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;