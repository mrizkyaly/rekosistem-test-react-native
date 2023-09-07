import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Router from './router/route';
import {lightColors} from './utils';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={lightColors.neutral.white}
        barStyle="dark-content"
      />
      <Router />
    </NavigationContainer>
  );
};

export default App;
