import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert, Modal, Dimensions, SafeAreaView } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import ConfettiCannon from 'react-native-confetti-cannon';


const window = Dimensions.get('window');
const screenHeight = window.height;
const screenWidth = window.width;

const Weights = ({ title, weights, passedStyle }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'white'}}>

                    <Modal visible={modalOpen} animationType='slide' presentationStyle='formSheet'>
                        <View style={styles.modalStyle}>
                    <TouchableOpacity style={{ marginTop: 60, marginLeft: 10 }} onPress={() => setModalOpen(false)}>
                    <MaterialIcons 
                        name='close' 
                        size={40}
                    />
                    </TouchableOpacity>
                     <View>
                     <ConfettiCannon count={100} origin={{x: screenWidth + 200, y: screenHeight + 130}} />
                         <Text style={styles.modalText}>{weights}</Text>
                     </View>
                    </View>
                    </Modal>


            <TouchableOpacity style={[styles.item, passedStyle]} onPress={() => setModalOpen(true) }>
                    <MaterialCommunityIcons 
                        name='weight-pound'
                        size={24}
                        style={{ right: 160, position: 'absolute' }}
                    />
                    <View >
                        <Text style={styles.itemText}>{title}</Text>
                    </View>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    item: {
        alignSelf: 'center',
        backgroundColor: '#22a6b3',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        paddingHorizontal: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.32,
        shadowRadius: 5,  
        elevation: 9,
        marginTop: 25
    },
    modalStyle: {
        height: screenHeight,
    },
    modalText: {
        marginTop: 250,
        marginHorizontal: 20,
        height: '100%',
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    itemText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})



export default Weights;