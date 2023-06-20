
import React from 'react';

import Login from './src/pages/Login/';

import NovoUsuario from './src/pages/NovoUsuario';
import Home from './src/pages/Home';
import Perfil from './src/pages/Perfil';
import Categorias from './src/pages/Categorias';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Galeria from './src/pages/Galeria';

import Configuracoes from './src/pages/Configuracoes';
import Mensagens from './src/pages/Mensagens';



const Stack = createStackNavigator();






export default function App() {



  return (











    < NavigationContainer >
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="Login"
          component={Login}

        />
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="Configuracoes"
          component={Configuracoes}

        />
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="Perfil"
          component={Perfil}

        />
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="Galeria"
          component={Galeria}

        />


        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="NovoUsuario"
          component={NovoUsuario}

        />
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="Home"
          component={Home}

        />


        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="Mensagens"
          component={Mensagens}

        />

        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="Esportes"
          component={Categorias}

        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}