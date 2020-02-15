import React from 'react';
import { Image, TouchableOpacity, Button, Text, View, ScrollView, StyleSheet } from 'react-native'; 
import * as Font from 'expo-font';

import Header from '../components/Header';
import SvgComponent from '../components/SvgComponent';

const HomeScreen = ({ navigation }) => {
    return (
          <View style={{ backgroundColor: 'white' }}>
            <Header />
              <View>
                <Text style={styles.titleText}>Select your Bar!</Text>
                <SvgComponent/>
                </View>
                  <TouchableOpacity style={styles.mensStyle} onPress={() => navigation.navigate('Mens Weight')} >
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Mens Bar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.womensStyle} onPress={() => navigation.navigate('Womens Weight')} >
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Womens Bar</Text>
                  </TouchableOpacity>
            </View>
    );
  }

  const styles = StyleSheet.create({
      titleText: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 34,
        fontWeight: 'bold'
      },
      mensStyle: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#5079ff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        paddingHorizontal: 60,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 440,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.32,
        shadowRadius: 5,  
        elevation: 9,
      },
      womensStyle: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#F08080',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        paddingHorizontal: 60,
        marginTop: 540,
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.32,
        shadowRadius: 5,  
        elevation: 9,
      },
  })


  export default HomeScreen;