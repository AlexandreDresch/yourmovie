import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Detail from '../Screens/Detail';
import Search from '../Screens/Search';
import Colors from '../Themes/colors';

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
        <Stack.Screen 
          name='Search'
          component={Search}
          options={{
            title: 'Search',
            headerTintColor: Colors.white,
            headerTitleStyle: {
              color: Colors.white,
            },
            headerStyle: {
              backgroundColor: Colors.appBackground
            }
          }}
        />
    </Stack.Navigator>
  );
}