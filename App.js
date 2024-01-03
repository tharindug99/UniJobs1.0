import * as React from 'react';
import { useCallback } from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Home, SignUp,EditUGProfile,RecommendedCard,JobOpportunity, LogIn, OptionsSelection, Settings, JobsApplied, Notifications, Profile} from './index';
import Tabs from './routes/Tabs';
import Splash_Screen from './Screens/Splash_Screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: '#ff8'
  }
}

function MyStack() {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
  });

  const TabNavigator = () => {

    return(
    <Tab.Navigator
            initialRouteName="Home" 
            screenOptions={screenOptions}>
  
  
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#16247d",
                    width: Platform.OS === "ios" ? 50 : 60,
                    height: Platform.OS === "ios" ? 50 : 60,
                    top: Platform.OS === "ios" ? -10 : -20,
                    borderRadius: Platform.OS === "ios" ? 25 : 30
                  }}>
                    <Feather name="home" size={24} color={focused ? "#000" : "#123"} />
                    <Text style={{ fontSize: 12, color: "#16247d" }}>Home</Text>
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
                    backgroundColor: "#16247d",
                    width: Platform.OS === "ios" ? 50 : 60,
                    height: Platform.OS === "ios" ? 50 : 60,
                    top: Platform.OS === "ios" ? -10 : -20,
                    borderRadius: Platform.OS === "ios" ? 25 : 30
                  }}>
                    <Feather name="briefcase" size={24} color={focused ? "#000" : "#123"} />
                    <Text style={{ fontSize: 12, color: "#16247d" }}>Jobs Applied</Text>
                  </View>
                )
              }}
            />
  
  
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#16247d",
                    width: Platform.OS === "ios" ? 50 : 60,
                    height: Platform.OS === "ios" ? 50 : 60,
                    top: Platform.OS === "ios" ? -10 : -20,
                    borderRadius: Platform.OS === "ios" ? 25 : 30
                  }}>
                    <Feather name="settings" size={24} color={focused ? "#000" : "#123"} />
                    <Text style={{ fontSize: 12, color: "#16247d" }}>Settings</Text>
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
                    backgroundColor: "#16247d",
                    width: Platform.OS === "ios" ? 50 : 60,
                    height: Platform.OS === "ios" ? 50 : 60,
                    top: Platform.OS === "ios" ? -10 : -20,
                    borderRadius: Platform.OS === "ios" ? 25 : 30
                  }}>
                    <Feather name="bell" size={24} color={focused ? "#000" : "#123"} />
                    <Text style={{ fontSize: 12, color: "#16247d" }}>Notifications</Text>
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
                    backgroundColor: "#16247d",
                    width: Platform.OS === "ios" ? 50 : 60,
                    height: Platform.OS === "ios" ? 50 : 60,
                    top: Platform.OS === "ios" ? -10 : -20,
                    borderRadius: Platform.OS === "ios" ? 25 : 30
                  }}>
                    <Feather name="user" size={24} color={focused ? "#000" : "#123"} />
                    <Text style={{ fontSize: 12, color: "#16247d" }}>Profile</Text>
                  </View>
                )
              }}
            />
  
            
          </Tab.Navigator>
          );
  }
  

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  else{
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash_Screen" component={Splash_Screen} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OptionsSelection" component={OptionsSelection} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RecommendedCard" 
                    component={RecommendedCard} />
      <Stack.Screen name="JobOpportunity" component={JobOpportunity}
                      options={{
                        headerShown: true,
                        title: 'View Job info..', 
                        headerStyle: {
                          backgroundColor: '#000', 
                        },
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditUGProfile" 
                    component={EditUGProfile} 
                    options={{
                      headerShown: true,
                      title: 'Edit User Profile', // Set your header title here
                      headerStyle: {
                        backgroundColor: '#000', // Customize the header background color
                      },
                      headerTintColor: '#fff', // Customize the header text color
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    }}/>
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
  }
}



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
