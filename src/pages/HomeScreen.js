import React from 'react';
import { Image, ImageBackground, Button, Text, View, ScrollView, StyleSheet } from 'react-native'; 
import * as Font from 'expo-font';

import Header from '../components/Header';
import SvgComponent from '../components/SvgComponent';
import Svg from 'react-native-svg';

const HomeScreen = ({ navigation }) => {
    return (
          <View >
            <Header />
            <ScrollView>
            <View>
            <Text style={styles.titleText}>Select your Bar!</Text>
            <Button onPress={() => navigation.navigate('Mens Weight')} title="Mens Bar"/>
            <Image 
                  source={{ uri: 'https://images.ctfassets.net/w6rcgw8h8anz/3zcZtCA1EIQlVCXEs6rbcI/32b33519a98a2f39711f0c7b6650df03/Simple_Solid-6.png' }}
              />

            <Button onPress={() => navigation.navigate('Womens Weight')} title="Womens Bar" />
              <Image 
                  source={{ uri: 'https://images.ctfassets.net/w6rcgw8h8anz/3zcZtCA1EIQlVCXEs6rbcI/32b33519a98a2f39711f0c7b6650df03/Simple_Solid-6.png' }}
              />
              </View>
              </ScrollView>
            </View>
    );
  }

  const styles = StyleSheet.create({
      titleText: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 34,
        fontWeight: 'bold'
      }
  })

  export default HomeScreen;  