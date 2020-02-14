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
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="95lb" weights="Put on a 25lb Plate"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="115lb" weights="Put on a 35lb Plate"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="135lb" weights="Put on a 45lb Plate"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="155lb" weights="Put on 45lb and 10lb Plates"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="185lb" weights="Put on 45lb and 10lb Plates"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="205lb" weights="Put on 45lb and 10lb Plates"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="215lb" weights="Put on 45lb and 10lb Plates"/>
                    <Weights passedStyle={{ backgroundColor: '#5079ff' }} title="225lb" weights="Put on 45lb and 10lb Plates"/>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
  }
  
  export default MensBar;