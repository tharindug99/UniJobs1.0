// In your App.js or wherever you set up your navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditUGProfile from '../Screens/EditUGProfile';
import Profile from '../Screens/Profile'; // Assuming you have your RecommendedCard component in a file

const Stack = createStackNavigator();

const StackJob = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditUGProfile" component={EditUGProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackJob;
