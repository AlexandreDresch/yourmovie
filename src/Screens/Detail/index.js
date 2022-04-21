import React, { useState, useEffect } from 'react';

import { View, Image, Text, ScrollView, Modal } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api, { key } from '../../services/api';
import Stars from 'react-native-stars'
import { Genres } from '../../components/Genres'; 
import { ModalLink } from '../../components/ModalLink';
import { saveMovie } from '../../utils/storage';

import { styles } from './styles';
import Colors from '../../Themes/colors';

export default function Detail(){
  const navigation = useNavigation();
  const route = useRoute();

  const [ movie, setMovie ] = useState({});
  const [ openLink, setOpenLink ] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function getMovie() {
      const response = await api.get(`/movie/${route.params?.id}`, {
        params: {
          api_key: key,
          language: 'en-US'
        }
      })
      .catch((err) => {
        console.log(err);
      })

      if(isActive) {
        setMovie(response.data);
      }
    }

    if(isActive){
      getMovie();
    }

    return () => {
      isActive = false;
    }
  }, []);

  async function favoriteMovie(movie) {
    await saveMovie('@yourmovie', movie)
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.headerButton}
            activeOpacity={.7}
            onPress={ () => navigation.goBack() }
          >
            <Feather
              name='arrow-left'
              size={28}
              color={Colors.white}
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.headerButton}
            onPress={ () => favoriteMovie(movie) }
          >
            <Ionicons
              name='bookmark-outline'
              size={28}
              color={Colors.white}
            />
          </TouchableOpacity>          
        </View>
        <Image 
          style={styles.bannerImage}
          source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`}} 
          resizeMethod= 'resize'
        />
        <TouchableOpacity
          activeOpacity={.7}
          style={styles.linkButton}
          onPress={() => setOpenLink(true)}
        >
          <Feather
            name='link'
            size={24}
            color={ Colors.white}
          />
        </TouchableOpacity>
        <Text
            style={styles.title}
            numberOfLines={2}
          >
            {movie.title}
        </Text>

        <View style={styles.voteContent}>
          <Stars 
            default={movie.vote_average}
            count={10}
            half={true}
            starSize={20}
            fullStar={ <Ionicons name='md-star' size={24} color={ Colors.yellow} /> }
            emptyStar={ <Ionicons name='md-star-outline' size={24} color={ Colors.yellow} /> }
            halfStar={ <Ionicons name='md-star-half' size={24} color={ Colors.yellow} /> }
            disable={true}
          />

          <Text style={styles.voteText}>
            {movie.vote_average}/10
          </Text>
        </View>

        <FlatList 
          style={styles.listGenres}
          data={movie?.genres}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ (item ) => String(item.id) }
          renderItem={ ({ item }) => <Genres data={item} /> }
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>
            Description
          </Text>
          <Text style={styles.description}>
            {movie?.overview}
          </Text>
        </ScrollView>

        <Modal 
          animationType='slide'
          transparent={true}
          visible={openLink}
        >
          <ModalLink 
            link={movie?.homepage}
            title={movie?.title}
            closeModal={() => setOpenLink(false)}
          />
        </Modal>
    </View>
  );
}