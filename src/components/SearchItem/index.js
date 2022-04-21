import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import Colors from '../../Themes/colors';

export function SearchItem({data, navigatePage}){

    function detailMovie() {
        if(data.release_date === ''){
            alert('Movie not yet released.')
            return;
        }
        navigatePage(data);
    }

  return (
    <TouchableOpacity
        style={styles.containerButton}
        activeOpacity={.7}
        onPress={detailMovie}
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

        <Text style={styles.title}>
            {data?.title}
        </Text>

        <View style={styles.rateContainer}>
            <Ionicons 
                name='md-star'
                size={12}
                color={Colors.yellow}
            />
            <Text style={styles.rateText}>
                {data?.vote_average}/10
            </Text>
        </View>
    </TouchableOpacity>
  );
}