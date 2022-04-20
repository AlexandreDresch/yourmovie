import { StyleSheet } from 'react-native';
import Colors from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 14,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
    width: 140,
  },  
  image: {
    width: 130,
    height: 180,
    borderRadius: 8,
  },
  title: {
    color: Colors.white,
    fontSize: 14,
    paddingTop: 8,
    width: '100%'
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    paddingLeft: 4,
    color: Colors.white,
    fontSize: 12
  }
});