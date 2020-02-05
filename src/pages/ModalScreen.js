import React from 'react';
import { Container, Body, Content, Text, Button } from 'native-base';
import * as Font from 'expo-font';

const ModalScreen = ({ navigation }) => {
    return (
        <Container>
            <Content>
                <Body>
                    <Button onPress={() => navigation.navigate('Weight')}>
                        <Text>Weight</Text>
                    </Button>
                </Body>
            </Content>
        </Container>
    );
}

export default ModalScreen;