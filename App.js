import * as React from 'react';
import { Container, Text, Button, Content, Body } from 'native-base';
import { Stylesheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

const HomeScreen = () => {
  return (
    <Container>
      <Content>
        <Body>
          <Text style={{ marginTop: 10, fontSize: 20 }}>Which bar are you using?</Text>
          <Button primary rounded style={{ marginVertical: 120 }}>
           <Text>Mens Bar</Text>
          </Button>
          <Button danger rounded>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;