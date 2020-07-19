import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { blackHaze } from '../../../constants/colors';

import styles from './styles';

const withSpinner = Component => props => {
  const {isLoading, ...otherProps} = props;
  return (
    <>
    {isLoading ?
      <View style={styles.container}>
        <ActivityIndicator size="large" color={blackHaze} />
      </View> :
      <Component {...otherProps} />
    }
    </>
  )
}

export default withSpinner;
