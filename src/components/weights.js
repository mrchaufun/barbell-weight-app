import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Weights = ({ title, weights }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={styles.container}>

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


            <TouchableOpacity style={styles.item} onPress={() => setModalOpen(true) }>
                <Text style={styles.buttonText}>
                    <Image 
                        style={styles.image}
                        source={{ 
                        uri: "https://images.ctfassets.net/w6rcgw8h8anz/1BALxPCQLJXn443CuvqYPE/661f484a067dbea53a979464e03aa16f/Dumble.png" 
                    }}
                    />
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        paddingHorizontal: 30,
        textAlignVertical: 'center'
    },
    item: {
        padding: 10,
        backgroundColor: 'grey',
        fontSize: 24,
        borderRadius: 25,
    },
    image: {
        width: 55,
        height: 55,
        marginTop: 10
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
    buttonText: {
        fontSize: 37,
        paddingLeft: 35,
        paddingBottom: 10
    }
})



export default Weights;