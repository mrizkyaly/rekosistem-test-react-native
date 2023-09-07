import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../config/Types';
import {
  CollectionDrag,
  Login,
  ModalTransaction,
  Splash,
  Transaction,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ModalTransaction"
        component={ModalTransaction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CollectionDrag"
        component={CollectionDrag}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
