import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../ecrans/tabs/BottomTabs.js';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes