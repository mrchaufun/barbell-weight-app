import React from 'react';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';

import Weights from '../components/Weights';
import Header from '../components/Header';
import SvgComponent from '../components/SvgComponent';

const MensBar = ({ navigation }) => {
 

    return (
        <SafeAreaView>
            <View>
            <Header />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
                <Weights title="95lb" weights="Put on a 25lb Plate"/>
                <Weights title="115lb" weights="Put on a 35lb Plate"/>
                <Weights title="135lb" weights="Put on a 45lb Plate"/>
                <Weights title="155lb" weights="Put on 45lb and 10lb Plates"/>
                <Weights title="185lb" weights="Put on 45lb and 10lb Plates"/>
                <Weights title="205lb" weights="Put on 45lb and 10lb Plates"/>
                <Weights title="215lb" weights="Put on 45lb and 10lb Plates"/>
                <Weights title="225lb" weights="Put on 45lb and 10lb Plates"/>
            </ScrollView>
        </View>
        </SafeAreaView>
    );
  }
  
  export default MensBar;