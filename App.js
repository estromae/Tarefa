import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/Login/LoginScreen';
import AverageStudentsScreen from './src/components/Calculator/AverageStudentsScreen';
import TestScreen from './src/components/Tests/TestScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Home" component={HomeScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="AverageStudentsScreen" component={AverageStudentsScreen}/>
        <Stack.Screen name="TestScreen" component={TestScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
