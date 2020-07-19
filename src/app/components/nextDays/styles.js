import { StyleSheet } from 'react-native';
import { blackHaze, funBlue } from '../../../constants/colors';

const styles = StyleSheet.create({
  nextDays: {
    backgroundColor: funBlue,
    height: 250,
    width: 50,
    marginTop: 10,
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  icon: {
    width: 50,
    height: 50,
  },
  detail: {
    color: blackHaze,
    textAlign: 'center',
  }
});

export default styles;
