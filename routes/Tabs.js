import { View, Platform } from 'react-native';
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, JobsApplied, Settings, Notifications, Profile } from '../index';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const focusedColor = '#019F99';
const unfocusedColor = '#fff';
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    background: '#ff8'
  }
}

export class Tabs extends Component {
  render() {
    return (
      
        <Tab.Navigator
          initialRouteName="Home" 
          screenOptions={screenOptions}>
          
          <Tab.Screen
            headerShown= 'true'
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? focusedColor : '#fff',
                  width: Platform.OS === "ios" ? 50 : 60,
                  height: Platform.OS === "ios" ? 50 : 60,
                  top: Platform.OS === "ios" ? -10 : -20,
                  borderRadius: Platform.OS === "ios" ? 25 : 30
                }}>
                  <Feather name="settings" size={24} color={focused ? "#fff" : "#000"} />
                  {/* <Text style={{ fontSize: 12, color: "#16247d" }}>Settings</Text> */}
                </View>
              ) 
            }}
          />

<Tab.Screen
            name="JobsApplied"
            component={JobsApplied}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? focusedColor : '#fff',
                  width: Platform.OS === "ios" ? 50 : 60,
                  height: Platform.OS === "ios" ? 50 : 60,
                  top: Platform.OS === "ios" ? -10 : -20,
                  borderRadius: Platform.OS === "ios" ? 25 : 30
                }}>
                  <Feather name="briefcase" size={24} color={focused ? "#fff" : "#000"} />
                  {/* <Text style={{ fontSize: 12, color: "#16247d" }}>Jobs Applied</Text> */}
                </View>
              )
            }}
          />

          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? focusedColor : '#fff',
                  width: Platform.OS === "ios" ? 50 : 60,
                  height: Platform.OS === "ios" ? 50 : 60,
                  top: Platform.OS === "ios" ? -10 : -20,
                  borderRadius: Platform.OS === "ios" ? 25 : 30
                }}>
                  <Feather name="home" size={24} color={focused ? "#fff" : "#000"} />
                  {/* <Text style={{ fontSize: 12, color: "#16247d" }}>Home</Text> */}
                </View>
              )
            }}
          />


          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? focusedColor : '#fff',
                  width: Platform.OS === "ios" ? 50 : 60,
                  height: Platform.OS === "ios" ? 50 : 60,
                  top: Platform.OS === "ios" ? -10 : -20,
                  borderRadius: Platform.OS === "ios" ? 25 : 30
                }}>
                  <Feather name="bell" size={24} color={focused ? "#fff" : "#000"} />
                  {/* <Text style={{ fontSize: 12, color: "#16247d" }}>Notifications</Text> */}
                </View>
              )
            }}
          />


          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? focusedColor : '#fff',
                  width: Platform.OS === "ios" ? 50 : 60,
                  height: Platform.OS === "ios" ? 50 : 60,
                  top: Platform.OS === "ios" ? -10 : -20,
                  borderRadius: Platform.OS === "ios" ? 25 : 30
                }}>
                  <Feather name="user" size={24} color={focused ? "#fff" : "#000"} />
                  {/* <Text style={{ fontSize: 12, color: "#16247d" }}>Profile</Text> */}
                </View>
              )
            }}



          />


        </Tab.Navigator>
        
    )
  }
}

export default Tabs;
