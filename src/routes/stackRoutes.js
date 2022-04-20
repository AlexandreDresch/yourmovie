import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Detail from '../Screens/Detail';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
 
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{
            headerShown: false
          }}          
        />
        <Stack.Screen 
          name='Detail'
          component={Detail}
          options={{
            headerShown: false,
            title: 'Details'
          }}
        />
    </Stack.Navigator>
  );
}