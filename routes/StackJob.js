// In your App.js or wherever you set up your navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JobOpportunity from '../components/JobDetails/JobOpportunity';
import RecommendedCard from '../components/RecommendedCard'; // Assuming you have your RecommendedCard component in a file

const Stack = createStackNavigator();

const StackJob = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={RecommendedCard} />
        <Stack.Screen name="JobOpportunity" component={JobOpportunity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackJob;
