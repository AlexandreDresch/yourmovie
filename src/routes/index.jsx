import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Movies from '../Screens/Movies';
import StackRoutes from './stackRoutes';
import Colors from '../Themes/colors';

const Drawer = createDrawerNavigator();

export default function Routes(){
  return (
   <Drawer.Navigator
   screenOptions={{
    drawerStyle:{
      backgroundColor: Colors.appBackground,
      paddingTop: 20,
    },
    drawerActiveBackgroundColor: Colors.black,
    drawerActiveTintColor: Colors.red,
    drawerInactiveTintColor: Colors.white,
    headerShown: false,
  }}
   >
       <Drawer.Screen 
        name='HomeDrawer' 
        component={StackRoutes}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size, color}) => (
            <MaterialCommunityIcons 
              name={focused ? 'movie-open' : 'movie-outline'}
              size={size}
              color={color}
            />
          )
        }}
       />
       <Drawer.Screen 
          name='Movies' 
          component={Movies}
          options={{
            title: 'My List',
            drawerIcon: ({ focused, size, color}) => (
              <MaterialCommunityIcons 
                name={focused ? 'archive' : 'archive-outline'}
                size={size}
                color={color}
              />
            )
          }}
        />
   </Drawer.Navigator>
  );
};