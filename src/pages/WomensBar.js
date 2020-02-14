import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, View } from 'react-native';
import * as Font from 'expo-font';

import Weights from '../components/Weights';
import Header from '../components/Header';

const WomensBar = () => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={{ flexGrow: 1, }}>
          <SafeAreaView>
            <View>
                <Header />
                <Weights passedStyle={{ backgroundColor: '#F08080' }} title="65lb" weights="Put on a 10lb and 5lb Plate on both sides"/>
                <Weights passedStyle={{ backgroundColor: '#F08080' }} title="95lb" weights="Put on a 25lb and a 5lb Plate on both sides"/>
                <Weights passedStyle={{ backgroundColor: '#F08080' }} title="105lb" weights="Put on a 35lb Plate on both sides"/>
                <Weights passedStyle={{ backgroundColor: '#F08080' }} title="115lb" weights="Put on a 35lb and 5lb Plate on both sides"/>
                <Weights passedStyle={{ backgroundColor: '#F08080' }} title="125lb" weights="Put on a 45lb Plate on both sides"/>
                <Weights passedStyle={{ backgroundColor: '#F08080' }} title="135lb" weights="Put on a 45lb and 5lb Plate on both sides"/>
                <Weights passedStyle={{ backgroundColor: '#F08080' }} title="145lb" weights="Put on a 45lb and 10lb Plate on both sides"/>
                <Weights passedStyle={{ backgroundColor: '#F08080' }} title="155lb" weights="Put on a 45lb, 10lb and 5lb Plate on both sides"/>
                <Weights passedStyle={{ backgroundColor: '#F08080' }} title="185lb" weights="Put on a 45lb, 25lb and 5lb Plate on both sides"/>
                <Weights passedStyle={{ backgroundColor: '#F08080' }} title="205lb" weights="Put on a 45lb, 35lb and 5lb Plate on both sides"/>
            </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F08080'
    }
})

export default WomensBar;