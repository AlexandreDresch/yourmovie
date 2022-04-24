import { StyleSheet } from 'react-native';

import Colors from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.appBackground,
    flex: 1,
    paddingVertical: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.transparentWhite,
    width: '85%',
    height: 40,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    color: Colors.white,
  },
  searchButton : {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  scrollTitle: {
    paddingTop: 20,
    paddingBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    paddingHorizontal: 14,
  },
  bannerImage: {
    height: 150,
    borderRadius: 6,
    marginHorizontal: 14,
    
  },
  slideList: {
    height: 240,
  }
});