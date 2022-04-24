import { StyleSheet } from 'react-native';
import Colors from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground
  },
  header: {
    zIndex: 99,
    position: 'absolute',
    top: 35,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  headerButton: {
    width: 46,
    height: 46,
    backgroundColor: 'rgba(25, 26, 48, 0.8)',
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 350,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  linkButton: {
    backgroundColor: Colors.red,
    width: 63,
    height: 63,
    borderRadius: 35,
    top: -35,
    left: 14,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    marginBottom: -30
  },
  title: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  voteContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },
  voteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  listGenres: {
    paddingLeft: 14,
    marginVertical: 8,
    maxHeight: 35,
    minHeight: 35,
  },
  description: {
    paddingHorizontal: 14,
    paddingBottom: 30,
    color: Colors.white,
    lineHeight: 18,
  }
});