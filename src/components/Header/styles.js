import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
  }, 
  button: {
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 14,
  }
});