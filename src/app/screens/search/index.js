import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-community/picker';
import { actionCreator } from '../../../redux/weather/actions';
import { citys } from '../../../constants/citys';

import Button from '../../components/button';
import { HOME } from '../../../constants/routes';

import styles from './styles';

const renderItem = ({ name, value }) => (
  <Picker.Item key={name} label={name} value={value} />
)

const Search = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handlePress = () => {
    dispatch(actionCreator.getWeather(value));
    navigation.navigate(HOME);
  };

  const handleChange = (city) => {
    setValue(city);
  };

  return (
    <View style={styles.search}>
      <TextInput
        placeholder="Ciudad"
      />
      <Picker onValueChange={handleChange} selectedValue={value}>
        {citys.map(renderItem)}
      </Picker>
      <View style={styles.buttonContainer}>
        <Button title="Aceptar" handlePress={handlePress}/>
      </View>
    </View>
  );
};

export default Search;
