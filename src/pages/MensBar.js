import React from 'react';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';

import Weights from '../components/Weights';
import Header from '../components/Header';

const MensBar = () => {
 

    return (
        <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
            <SafeAreaView>
                <View>
                    <Header />
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="95lb" weights="Put on 25lb Plates on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="115lb" weights="Put on 35lb Plates on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="135lb" weights="Put on 45lb Plates on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="155lb" weights="Put on 45lb and 10lb Plates on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="185lb" weights="Put on 45lb and 25lb Plates on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="205lb" weights="Put on 45lb and 35lb Plates on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="215lb" weights="Put on 45lb, 30lb and 5lb Plate on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="225lb" weights="Put on 2x 45lb Plates on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="250lb" weights="Put on 2x 45lb, 10lb and 5lb Plates on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="285lb" weights="Put on 2x 45lb, 25lb and 5lb Plates on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="315lb" weights="Put on 3x 45lb Plates on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="325lb" weights="Put on 3x 45lb and a 5lb Plate on both sides"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="355lb" weights="Put on 3x 45lb and 2x 10lb Plates on both sides"/>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
  }
  
  export default MensBar;