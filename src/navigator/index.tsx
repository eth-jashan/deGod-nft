import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeNavigator from './WelcomeNavigator';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

function AppMainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="FistTime">
        <Stack.Screen name="FistTime" component={WelcomeNavigator} />
        <Stack.Screen name="MainFlow" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppMainNavigator;
