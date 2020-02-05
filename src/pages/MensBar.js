import React from 'react';
import { Container, Body, Content, Text, Button } from 'native-base';
import * as Font from 'expo-font';

import Weights from '../components/weights';

const MensBar = ({ navigation }) => {
    return (
        <Container style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
        <Weights title="95lb" weights="Put on a 25lb Plate"/>
        <Weights title="115lb" weights="Put on a 35lb Plate"/>
        <Weights title="135lb" weights="Put on a 45lb Plate"/>
        <Weights title="155lb" weights="Put on 45lb and 10lb Plates"/>
        <Button onPress={() => navigation.navigate('Main')}>
            <Text>Modal</Text>
        </Button>
        </Container>
    );
  }
  
  export default MensBar;