import React from 'react';
import { Container, Content, Body, Text, Card, CardItem } from 'native-base';
import { Image } from 'react-native'
import * as Font from 'expo-font';

const Weights = (props) => {
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem header bordered button onPress={() => alert(`${props.weights}`)}>
                        <Body>
                            <Image 
                                style={{ width: 30, height: 30 }}
                                source={{ uri: "https://images.ctfassets.net/w6rcgw8h8anz/1BALxPCQLJXn443CuvqYPE/661f484a067dbea53a979464e03aa16f/Dumble.png" }}
                            />
                            <Text>{props.title}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}

export default Weights;