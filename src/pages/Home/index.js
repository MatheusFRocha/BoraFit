import React from "react";
import { View, Text, Button } from "react-native";
import MyTabs from "../Menu";
import { auth } from "../../config/firebase";


import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Home({ navigation }) {




    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user !== null) {
            navigation.navigate("Home", user.uid)
            const uid = user.uid;

            console.log(user.email)
            // ...
        }
    });
    return (



        <MyTabs />








    );


}