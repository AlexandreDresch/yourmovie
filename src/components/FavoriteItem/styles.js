import { StyleSheet } from 'react-native';
import Colors from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 14
  },
  title: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold'
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  rateText: {
    color: Colors.white,
    fontSize: 12,
    paddingLeft: 4
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleButton: {
    color: Colors.white,
    fontSize: 14,
  },
  detailButton: {
    width: '85%',
    height: 30,
    backgroundColor: Colors.transparentWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  deleteButton: {
    width: '15%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});