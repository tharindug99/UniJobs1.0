import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash_Screen from '../Screens/Splash_Screen';
import SignUp from '../Screens/SignUp';
import OptionsSelection from '../Screens/OptionsSelection';
import LogIn from '../Screens/LogIn';
import Home from '../Screens/Home';

const Stack = createStackNavigator();

export class StackOne extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash_Screen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OptionsSelection" component={OptionsSelection} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
}

export default StackOne;
