import React from 'react';
import { Container, Text, Button, Content, Body } from 'native-base';
import { Image } from 'react-native'; 
import * as Font from 'expo-font';

import Female from '../components/Female';

const HomeScreen = ({ navigation }) => {
    return (
      <Container>
        <Content>
          <Body>
            <Text style={{ marginTop: 50, fontSize: 20 }}>Which bar are you using?</Text>
            <Button primary rounded style={{ marginVertical: 120 }} onPress={() => navigation.navigate('Mens Weight')}>
            <Image 
                  style={{ width: 30, height: 30, marginLeft: 10 }}
                  source={{ uri: 'https://images.ctfassets.net/w6rcgw8h8anz/3zcZtCA1EIQlVCXEs6rbcI/32b33519a98a2f39711f0c7b6650df03/Simple_Solid-6.png' }}
              />
             <Text>Mens Bar</Text>
            </Button>
            <Button danger rounded onPress={() => navigation.navigate('Womens Weight')}>
              <Image 
                  style={{ width: 30, height: 30, marginLeft: 10 }}
                  source={{ uri: 'https://images.ctfassets.net/w6rcgw8h8anz/3zcZtCA1EIQlVCXEs6rbcI/32b33519a98a2f39711f0c7b6650df03/Simple_Solid-6.png' }}
              />
              <Text>Womens Bar</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }

  export default HomeScreen;