import * as React from 'react';
import { Container, Text, Button, Content, Body } from 'native-base';
import { Stylesheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

import WomensBar from './src/pages/WomensBar';
import MensBar from './src/pages/MensBar';

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Body>
          <Text style={{ marginTop: 10, fontSize: 20 }}>Which bar are you using?</Text>
          <Button primary rounded style={{ marginVertical: 120 }} onPress={() => navigation.navigate('Mens Weight')}>
           <Text>Mens Bar</Text>
          </Button>
          <Button danger rounded onPress={() => navigation.navigate('Womens Weight')}>
            <Text>Womens Bar</Text>
          </Button>
        </Body>
      </Content>
    </Container>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mens Weight" component={MensBar} />
        <Stack.Screen name="Womens Weight" component={WomensBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;