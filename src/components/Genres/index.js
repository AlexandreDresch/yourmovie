import React from 'react';

import {
  View, Text
} from 'react-native';

import { styles } from './styles';

export function Genres({ data }){
  return (
    <View style={styles.container}>
        <Text>
            {data.name}
        </Text>
    </View>
  );
}