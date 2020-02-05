import * as React from 'react';
import { Container, Text, Button, Content, Body } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import WomensBar from './src/pages/WomensBar';
import MensBar from './src/pages/MensBar';
import HomeScreen from './src/pages/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#97908F'
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold'
            }
      }}
      initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Mens Weight" component={MensBar}/>
        <Stack.Screen name="Womens Weight" component={WomensBar}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

export default App;