import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { SearchItem } from '../../components/SearchItem';
import api, { key } from '../../services/api';

import { styles } from './styles';

export default function Search(){
    const [ movie, setMovie ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        let isActive = true;

        async function getSearchMovie() {
            const response = await api.get('/search/movie', {
                params: {
                    query: route?.params?.name,
                    api_key: key,
                    language: 'en-US',
                    page: 1,
                }
            })

            if(isActive) {
                setMovie(response.data.results);
                setLoading(false);
            }
        }

        if(isActive) {
            getSearchMovie();
        }

        return () => {
            isActive = false;
        }
    }, [])

    function navigateDetailsPage(item) {
        navigation.navigate('Detail', { id: item.id })
    }

    if(loading) {
        return(
            <View style={styles.container}>

            </View>
        )
    }
  return (
    <View style={styles.container}>
        <FlatList 
            data={movie}
            showsVerticalScrollIndicator={false}
            keyExtractor={ (item) => String(item.id) }
            renderItem={ ({item}) => <SearchItem data={item} navigatePage={ () => navigateDetailsPage(item) } />}
        />
    </View>
  );
}