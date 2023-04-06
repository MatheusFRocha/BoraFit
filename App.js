
import React from 'react';

import Login from './src/pages/Login/';

import NovoUsuario from './src/pages/NovoUsuario';
import Home from './src/pages/Home';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login
      ">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}