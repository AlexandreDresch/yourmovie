import React, { useEffect, useState } from 'react';

import { View, Text, FlatList } from 'react-native';
import { Header } from '../../components/Header';

import { styles } from './styles';

export default function Movies(){
  const [ movies, setMovies ] = useState([]);

  

  return (
    <View style={styles.container}>
      <Header title='My List' />

      <FlatList 
        data={[]}
        style={styles.listMovies}
      />
    </View>
  );
}