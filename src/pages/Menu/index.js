import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Galeria from '../Galeria';
import Perfil from '../Perfil';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator

        >

            <Tab.Screen options={{
                headerTransparent: true, headerShown: false,
            }} name="Esportes" component={Galeria} />

            <Tab.Screen options={{

                headerTransparent: true, headerShown: false,
            }} name="Settings" component={Perfil} />




        </Tab.Navigator>
    );
}

