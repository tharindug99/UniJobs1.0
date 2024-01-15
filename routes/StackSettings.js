import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccSettings from '../Screens/Settings Screen/AccSettings';
import NotifSettings from '../Screens/Notifications Screens/Notifications';
import Settings from '../Screens/Settings Screen/Settings';
import React from 'react'

const Stack = createStackNavigator();

const StackSettings = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="AccSettings" component={AccSettings} />
        <Stack.Screen name="NotifSettings" component={NotifSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default StackSettings

const styles = StyleSheet.create({})