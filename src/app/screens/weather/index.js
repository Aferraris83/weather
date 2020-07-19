import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SEARCH } from '../../../constants/routes';
import NextDays from '../../components/nextDays';
import Button from '../../components/button';

import styles from './styles';

const Weather = ({city, today, nextDays}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(SEARCH);
  };

  return (
    <>
      <View style={styles.container}>
        {city &&
          <>
            <Text style={styles.city}>{city.name}</Text>
            <View style={styles.tempContainer}>
              <Text style={styles.temp}>{`${Math.floor(today.main.temp)} °`}</Text>
              <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}} />
            </View>
            <Text style={styles.description}>{today.weather[0].description}</Text>
            <View style={styles.days}>
              {nextDays.map(NextDays)}
            </View>
          </>
        }
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Buscar" handlePress={handlePress}/>
      </View>
    </>
  );
};

export default Weather;
