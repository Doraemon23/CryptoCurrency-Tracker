import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigator from '../navigation/TopTabNavigator';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
        
      <Stack.Screen name="Root" component={TopTabNavigator} 
      options={{ headerShown: false }}/>
    
    </Stack.Navigator>
  )
}

export default Navigation;