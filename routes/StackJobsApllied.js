import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StatusofJobsApplied from '../Screens/Jobs Applied Screen/StatusofJobsApplied';
import JobsApplied from '../Screens/Jobs Applied Screen/JobsApplied';
const Stack = createStackNavigator();

import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class StackJobsApllied extends Component {
  render() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="StatusofJobsApplied" component={StatusofJobsApplied} />
          <Stack.Screen name="JobsApplied" component={JobsApplied} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default StackJobsApllied