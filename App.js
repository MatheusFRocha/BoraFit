
import React from 'react';

import Login from './src/pages/Login/';

import NovoUsuario from './src/pages/NovoUsuario';
import Home from './src/pages/Home';
import Perfil from './src/pages/Perfil';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Galeria from './src/pages/Galeria';

import Lobby from './src/pages/Lobby';
import Configuracoes from './src/pages/Configuracoes';
import Mensagens from './src/pages/Mensagens';
import CriarPerfil from './src/pages/CriarPerfil';
import Categorias from './src/pages/Categorias';

import Ressenha from './src/pages/Resenha';
import Grupos from './src/pages/grupos/grupos';
import CriarSala from './src/pages/CriarSala'

import Pessoa from './src/pages/Pessoas';

import CriarSalaCorrida from './src/pages/CriarSalaCorrida'
import MapCorrida from './src/pages/CriarSalaCorrida/mapCorrida'
import Academia from './src/pages/CriarSala/academia';
import Futebol from './src/pages/CriarSala/futebol';
import Ciclismo from './src/pages/CriarSala/ciclismo';
import SelectCorrida from './src/pages/SelectSala/SelectCorrida';
import SalaSelecionada from './src/pages/SelectSala/SalaSelecionada';





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
          name="SelectCorrida"
          component={SelectCorrida}

        />

<Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="SalaSelecionada"
          component={SalaSelecionada}

        />

<Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="MapCorrida"
          component={MapCorrida}

        />

<Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="CriarSala"
          component={CriarSala}

        />

<Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="academia"
          component={Academia}

        />

<Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="futebol"
          component={Futebol}

        />

<Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="ciclismo"
          component={Ciclismo}

        />

<Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="CriarSalaCorrida"
          component={CriarSalaCorrida}

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
          name="CriarPerfil"
          component={CriarPerfil}

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


        <Stack.Screen
                  options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                  }}
                  name="Resenha"
                  component={Ressenha}
         />

<Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="Lobby"
          component={Lobby}

        />
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="Grupos"
          component={Grupos}

        />
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="Pessoa"
          component={Pessoa}

        />

      </Stack.Navigator>
    </NavigationContainer >
  );
}