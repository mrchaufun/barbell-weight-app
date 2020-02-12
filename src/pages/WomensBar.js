import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, View } from 'react-native';
import * as Font from 'expo-font';

import Weights from '../components/Weights';
import Header from '../components/Header';

const WomensBar = () => {
    return (
        <View style={{ height: '100%' }}>
            <Header />
            <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
            <Weights style={styles.item} title="95lb" weights="Put on a 25lb Plate"/>
            <Weights title="115lb" weights="Put on a 35lb Plate"/>
            <Weights title="135lb" weights="Put on a 45lb Plate"/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderRadius: 5
    }
})

export default WomensBar;