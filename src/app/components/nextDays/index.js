import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';

import styles from './styles';

moment.locale('es');

const NextDays = ({ weather, main, dt_txt }, i) => {
  return (
    <View style={styles.nextDays} key={i} >
      <Text style={styles.detail}>{moment(dt_txt).format('DD/MM')}</Text>
      <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}} />
      <Text style={styles.detail}>{`${Math.floor(main.temp)} °`}</Text>
    </View>
  );
};

export default NextDays;
