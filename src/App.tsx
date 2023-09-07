import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Router from './router/route';
import {lightColors} from './utils';
import {ThemeProvider} from './helper';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor={lightColors.neutral.white}
          barStyle="dark-content"
        />
        <Router />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
