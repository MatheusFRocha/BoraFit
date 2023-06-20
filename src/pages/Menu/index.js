import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Configuracoes from '../Configuracoes';
import Mensagens from '../Mensagens';
import Categorias from '../Categorias';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator


        >

            <Tab.Screen options={{
                headerTransparent: true, headerShown: false,
            }} name="Esportes" component={Categorias} />

            <Tab.Screen options={{

                headerTransparent: true, headerShown: false,
            }} name="Configurações" component={Configuracoes} />
            <Tab.Screen options={{

                headerTransparent: true, headerShown: false,
            }} name="Mensagens" component={Mensagens} />




        </Tab.Navigator>
    );
}

