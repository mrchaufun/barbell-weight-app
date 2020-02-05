import React from 'react';
import { Container, Body, Content, Text, Button } from 'native-base';
import * as Font from 'expo-font';

const ModalScreen = () => {
    return (
        <Container>
            <Content>
                <Body>
                    <Button>
                        <Text>Weight</Text>
                    </Button>
                </Body>
            </Content>
        </Container>
    );
}

export default ModalScreen;