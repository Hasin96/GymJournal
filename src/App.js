/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';
import {
  View,
  Text
} from 'react-native';
import HomePage from './HomePage';
import ProgramForm from './ProgramForm';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      

        <Stack.Screen 
          name="Home"
          component={HomePage}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="ProgramForm"
          component={ProgramForm}
          options={{ title: 'Form' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


