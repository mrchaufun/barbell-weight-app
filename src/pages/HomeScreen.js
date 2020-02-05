import React from 'react';
import { Container, Text, Button, Content, Body } from 'native-base';

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

  export default HomeScreen;