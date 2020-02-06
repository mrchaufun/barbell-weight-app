import React from 'react';
import * as Font  from 'expo-font';
import { AppLoading } from 'expo';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import WomensBar from './src/pages/WomensBar';
import MensBar from './src/pages/MensBar';
import HomeScreen from './src/pages/HomeScreen';
import ModalScreen from './src/pages/ModalScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    loading: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ loading: true });
  }



render() {
  if (!this.state.loading) {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
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
        <Stack.Screen name="Main" component={ModalScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
}
