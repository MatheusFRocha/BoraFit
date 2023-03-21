
import React from 'react';
import { View } from 'react-native';
import Login from './src/pages/Login/';
import Home from './src/pages/Home/';
import NovoUsuario from './src/pages/NovoUsuario/';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name="Login"
          component={Login}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}