import { StyleSheet } from 'react-native';
import { blizzardBlue } from '../../../constants/colors';

const styles = StyleSheet.create({
  search: {
    flex: 1,
    backgroundColor: blizzardBlue,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
});

export default styles;
