import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';


import { styles } from './styles';

export function SearchItem({data}){
  return (
    <TouchableOpacity
        style={styles.containerButton}
        activeOpacity={.7}
    >
        { data?.poster_path ? (
            <Image 
                style={styles.image}
                resizeMethod='resize'
                source={{ uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`}}
            />
        ) : (
            <Image 
                style={styles.image}
                resizeMethod='resize'
                source={ require('../../assets/noimage-found.png') }
            />
        )}
    </TouchableOpacity>
  );
}