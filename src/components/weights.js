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
                        size={28}
                        onPress={() => setModalOpen(false) }
                    />
                    <View>
                        <Text style={styles.modalText}>{weights}</Text>
                    </View>
                </View>
            </Modal>


            <TouchableOpacity onPress={() => setModalOpen(true) }>
                <Text style={styles.item}>
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
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    item: {
        padding: 20,
        backgroundColor: 'grey',
        fontSize: 24,
        borderRadius: 15,
    },
    image: {
        width: 35,
        height: 35,
    },
    modalStyle: {
        marginTop: 60,
        height: 100,
        marginHorizontal: 10
    },
    modalText: {
        marginTop: 150,
        height: 100,
        fontSize: 34,
        paddingLeft: 35
    }
})



export default Weights;