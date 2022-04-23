import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import { styles } from './styles';
import Colors from '../../Themes/colors';

export function FavoriteItem({data, deleteMovie, navigatePage}){
  return (
    <View style={styles.container}>
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
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={styles.detailButton}
                onPress={() => navigatePage(data)}
            >
                <Text style={styles.titleButton}>
                    Details
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => deleteMovie(data.id)}
            >
                <Feather 
                    name='trash'
                    size={24}
                    color={Colors.red}
                />
            </TouchableOpacity>
        </View>

    </View>
  );
}