import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Configuracoes from '../Configuracoes';
import Mensagens from '../Mensagens';
import Categorias from '../Categorias';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator


        >

            <Tab.Screen options={{
                headerTransparent: true, headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="soccer" color={color} size={size} />
                  ),
            }} name="Esportes" component={Categorias} />

            <Tab.Screen options={{

                headerTransparent: true, headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-cog" color={color} size={size} />
                  ),
            }} name="Configurações" component={Configuracoes} />
            <Tab.Screen options={{

                headerTransparent: true, headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="chat" color={color} size={size} />
                  ),
            }} name="Mensagens" component={Mensagens} />




        </Tab.Navigator>
    );
}

