import React from 'react';
import { Container, Content, Body, Text, Card, CardItem } from 'native-base';
import { Image } from 'react-native'

class Weights extends React.Component {
    render() {
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem header bordered button>
                        <Body>
                            <Image 
                                style={{ width: 30, height: 30 }}
                                source={{ uri: "https://images.ctfassets.net/w6rcgw8h8anz/1BALxPCQLJXn443CuvqYPE/661f484a067dbea53a979464e03aa16f/Dumble.png" }}
                            />
                            <Text>{this.props.title}</Text>
                        </Body>
                    </CardItem>
                </Card> 
            </Content>
        </Container>
    );
  }
}
export default Weights;