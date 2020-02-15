import React from 'react';
import * as Font  from 'expo-font';
import { AppLoading } from 'expo';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import WomensBar from './src/pages/WomensBar';
import MensBar from './src/pages/MensBar';
import HomeScreen from './src/pages/HomeScreen';

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
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Mens Weight" component={MensBar}/>
        <Stack.Screen name="Womens Weight" component={WomensBar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}
