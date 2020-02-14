import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Weights = ({ title, weights, passedStyle }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={{ backgroundColor: 'white'}}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalStyle}>
                    <MaterialIcons 
                        name='close' 
                        size={40}
                        onPress={() => setModalOpen(false) }
                    />
                    <View>
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
        elevation: 9
    },
    modalStyle: {
        marginTop: 60,
        height: 150,
        marginHorizontal: 10
    },
    modalText: {
        marginTop: 150,
        height: 100,
        fontSize: 34,
        paddingLeft: 40
    },
    itemText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})



export default Weights;