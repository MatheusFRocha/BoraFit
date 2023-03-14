import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Perfil from "./src/pages/Perfil";
import Login from "./src/pages/Login";


const Drawer = createDrawerNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Sobre" component={Sobre} />
                <Drawer.Screen name="Perfil" component={Perfil} />
                <Drawer.Screen name="Login" component={Login} />

            </Drawer.Navigator>
        </NavigationContainer>

    );

}