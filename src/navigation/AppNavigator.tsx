import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Home';
import Log from '../Log';
// v6
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Log" component={Log} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;