import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import styles from './styles';

const Button = ({ title, handlePress }) => {
  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
