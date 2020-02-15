import React from 'react';
import { Container, Body, Content, Text, Button } from 'native-base';
import * as Font from 'expo-font';

import Weight from '../components/Weights';

const ModalScreen = () => {
    return (
        <Container>
            <Content>
                <Body>
                    <Text>This is the Modal Screen</Text>
                </Body>
            </Content>
        </Container>
    );
}

export default ModalScreen;