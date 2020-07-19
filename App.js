import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import store from './src/redux/store';

import Home from './src/app/screens/home';
import Search from './src/app/screens/search';

import { HOME, SEARCH } from './src/constants/routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={HOME} component={Home} options={{headerShown: false}} />
          <Stack.Screen name={SEARCH} component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
