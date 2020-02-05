import React from 'react';
import { Container, Content, Body, Text, Card, CardItem } from 'native-base';
import * as Font from 'expo-font';

const Weights = (props) => {
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem header button onPress={() => alert(`${props.weights}`)}>
                        <Body>
                            <Text>{props.title}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}

export default Weights;