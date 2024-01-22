import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootContainerStackParamList, Screens} from '../constants/navigation';
import {Products} from '../screens/Products';
import React from 'react';
import {Product} from '../screens/Product';
const Stack = createNativeStackNavigator<RootContainerStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.Products} component={Products} />
      <Stack.Screen name={Screens.Product} component={Product} />
    </Stack.Navigator>
  );
};
