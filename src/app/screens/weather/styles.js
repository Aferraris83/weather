import { StyleSheet } from 'react-native';
import { blackHaze } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 25,
    flex: 1,
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  city: {
    color: blackHaze,
    fontSize: 25,
    textAlign: 'center',
  },
  temp: {
    color: blackHaze,
    fontSize: 50,
  },
  description: {
    color: blackHaze,
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  icon: {
    width: 60,
    height: 60,
  },
  days: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default styles;
