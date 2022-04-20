import React from 'react';

import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

import { styles } from './styles';
import Colors from '../../Themes/colors';

export function ModalLink({link, title, closeModal}){
  return (
    <>
        <TouchableOpacity 
            style={styles.backButton}
            activeOpacity={.9}
            onPress={closeModal}
        >
            <Feather 
                name='x'
                size={35}
                color={Colors.white}
            />
            <Text 
                style={styles.textName}
                numberOfLines={1}
            >
                {title}
            </Text>
        </TouchableOpacity>

        <WebView 
            source={{ uri: link }}

        />
    </>
  );
};