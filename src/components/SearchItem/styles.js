import { StyleSheet } from 'react-native';
import Colors from '../../Themes/colors';


export const styles = StyleSheet.create({
  containerButton: {
    padding: 14
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 8,
  },
  title: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 8,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateText: {
    paddingLeft: 4,
    color: Colors.white,
    fontSize: 12
  }
});