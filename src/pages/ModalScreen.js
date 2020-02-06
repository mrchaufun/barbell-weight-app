import React from 'react';
import { Container, Body, Content, Text, Button } from 'native-base';
import * as Font from 'expo-font';

import Weight from '../components/weights';

const ModalScreen = () => {
    return (
        <Container>
            <Content>
                <Body>
                    <Weight title="145lb" weights="Put on a 45lb Plate" />
                </Body>
            </Content>
        </Container>
    );
}

export default ModalScreen;