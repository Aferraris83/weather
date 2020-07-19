import { StyleSheet } from 'react-native';
import { blackHaze, midnight } from '../../../constants/colors';


const styles = StyleSheet.create({
  button: {
    marginBottom: 50,
    backgroundColor: midnight,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 50,
    width: 200,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonText: {
    color: blackHaze,
    fontWeight: '700',
    fontSize: 20,
  }
});

export default styles;
