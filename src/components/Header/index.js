import React from 'react';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { styles } from './styles';
import Colors from '../../Themes/colors';

//type header = {
//    title: string
//}

export function Header({title}){
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
            <Feather 
                name='menu'
                size={36}
                color= {Colors.white}
            />
        </TouchableOpacity>
        <Text style={styles.title}>
            {title}
        </Text>
    </View>
  );
}