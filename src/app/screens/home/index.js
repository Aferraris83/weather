import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Weather from '../weather';
import Spinner from '../../components/spinner';

import { actionCreator } from '../../../redux/weather/actions';

import styles from './styles';

const WithSpinner = Spinner(Weather);

const Home = () => {
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather.weather);
  const [loading, setLoading] = useState(true);
  const { city, nextDays, today } = weather;

  useEffect(() => {
    dispatch(actionCreator.getWeather());
  },[]);

  useEffect(() => {
    if (weather.city) {
      setLoading(false);
    }
  },[weather]);

  return (
    <View style={styles.home}>
      <WithSpinner city={city} nextDays={nextDays} today={today} isLoading={loading} />
    </View>
  );
};

export default Home;
