import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles';
import Colors from '../../Themes/colors';


export function SliderItem({ data, navigatePage }){
  return (    
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={.7}
      onPress={() => navigatePage(data)}
    >
      <Image
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}}            
            
      />

      <Text 
        style={styles.title}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {data.title}
      </Text>
      <View style={styles.rateContainer}>
        <Ionicons
          name='md-star'
          size={12}
          color= {Colors.yellow}
        />
        <Text style={styles.rate}>
          {data.vote_average}
        </Text>
      </View>
    </TouchableOpacity>
    
  );
}