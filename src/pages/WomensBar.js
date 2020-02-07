import React from 'react';
import { Container, Body, Content, Text, Button } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

import Weights from '../components/Weights';

const WomensBar = () => {
    return (
        <Container style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
            <ScrollView>
            <Weights style={styles.item} title="95lb" weights="Put on a 25lb Plate"/>
            <Weights title="115lb" weights="Put on a 35lb Plate"/>
            <Weights title="135lb" weights="Put on a 45lb Plate"/>
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderRadius: 5
    }
})

export default WomensBar;