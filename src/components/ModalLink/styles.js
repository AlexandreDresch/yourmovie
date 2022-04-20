import { StyleSheet } from 'react-native';
import Colors from '../../Themes/colors';

export const styles = StyleSheet.create({
  backButton: {
    padding: 10,
    backgroundColor: Colors.appBackground,
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textName: {
    marginLeft: 8,
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  }
});