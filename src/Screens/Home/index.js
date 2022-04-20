import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Image, ActivityIndicator } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { SliderItem } from '../../components/SliderItem';
import api, { key } from '../../services/api';
import { getListMovies, randomBanner } from '../../utils/movie';

import { styles } from './styles';
import Colors from '../../Themes/colors';
import { Feather } from '@expo/vector-icons';


export default function Home(){

  const [ nowMovies, setNowMovies ] = useState([]);
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [ topMovies, setTopMovies ] = useState([]);
  const [ bannerMovie, setBannerMovie ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const [ input, setInput ] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getMovies() {
      const [nowData, popularData, topData] = await Promise.all([
        api.get('/movie/now_playing', {
          params: {
            api_key: key,
            language: 'en-US',
            page: 1,
          }
        }),
        api.get('/movie/popular', {
          params: {
            api_key: key,
            language: 'en-US',
            page: 1,
          }
        }),
        api.get('/movie/top_rated', {
          params: {
            api_key: key,
            language: 'en-US',
            page: 1,
          }
        }),
    ])

    if(isActive) {
      const nowList = getListMovies(10, nowData.data.results);
      const popularList = getListMovies(5, popularData.data.results);    
      const topList = getListMovies(5, topData.data.results);

      setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)])
      
      setNowMovies(nowList);
      setPopularMovies(popularList);
      setTopMovies(topList);

      setLoading(false);
    }
    
    }
    getMovies();

    return () => {
      isActive = false;
      ac.abort();
    }
  }, []);

  function navigateDetailsPage(item) {
    navigation.navigate('Detail', { id: item.id })
    
  }

  function handleSearchMovie() {
    if(input === '') return;

    navigation.navigate('Search', { name: input });
    setInput('');
  }

  if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator 
          size='large'
          color={Colors.white}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header 
        title='Your Movies'
      />

      <View style={styles.searchContainer}>
        <TextInput 
          placeholder='Ex Interestellar'
          style={styles.input}
          value={input}
          onChangeText={ (text) => setInput(text) }
        />
        <TouchableOpacity 
          style={styles.searchButton}
          onPress={handleSearchMovie}
        >
          <Feather 
            name='search' size={30} color={Colors.white}
          />
        </TouchableOpacity>        
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.scrollTitle}>
          In Theaters
        </Text>

        <TouchableOpacity 
          activeOpacity={.7}
          onPress={() => navigateDetailsPage(bannerMovie)}
        >
          <Image
            style={styles.bannerImage}
            resizeMethod='resize'
            source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`}}            
          />
        </TouchableOpacity>
          <FlatList 
            style={styles.slideList}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={nowMovies}
            renderItem={ ({item}) => <SliderItem data={item} navigatePage={ () => navigateDetailsPage(item) } />}
            keyExtractor={(item) => String(item.id)}
          />    

        <Text style={styles.scrollTitle}>
          Popular
        </Text>

        <FlatList 
          style={styles.slideList}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={popularMovies}
          renderItem={ ({item}) => <SliderItem data={item} navigatePage={() => navigateDetailsPage(item)} />}
          keyExtractor={(item) => String(item.id)}
        /> 

        <Text style={styles.scrollTitle}>
            Top Rated
        </Text>

        <FlatList 
          style={styles.slideList}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={topMovies}
          renderItem={ ({item}) => <SliderItem data={item} navigatePage={() => navigateDetailsPage(item)} />}
          keyExtractor={(item) => String(item.id)}
        /> 
      </ScrollView>
    </View>
  );
}