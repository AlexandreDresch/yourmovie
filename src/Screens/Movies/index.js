import React, { useEffect, useState } from 'react';

import { View, Text, FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { getMoviesSave, deleteMovie } from '../../utils/storage';
import { FavoriteItem } from '../../components/FavoriteItem';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import { styles } from './styles';

export default function Movies(){
  const [ movies, setMovies ] = useState([]);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(()=> {
    let isActive = true;

    async function getFavoriteMovies() {
      const result = await getMoviesSave('@yourmovie');

      if(isActive) {
        setMovies(result);
      }
    }

    if(isActive) {
      getFavoriteMovies();
    }

    return() => {
      isActive = false;
    }

  }, [isFocused]);

  async function handleDelete(id) {
    const result = await deleteMovie(id);
    setMovies(result);
  }

  function navigateDetailsPage(item){
    navigation.navigate('Detail', { id: item.id } )
  }

  return (
    <View style={styles.container}>
      <Header title='My List' />

      <FlatList 
        style={styles.listMovies}
        showsVerticalScrollIndicator={false}
        data={movies}        
        keyExtractor={ item => String(item.id) }
        renderItem={ ({ item }) => (
          <FavoriteItem 
            data={item}
            deleteMovie={handleDelete}
            navigatePage={() => navigateDetailsPage(item)}
          />
        ) }
      />
    </View>
  );
}