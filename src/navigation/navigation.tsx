import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './HomeStack';
import React from 'react';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};
