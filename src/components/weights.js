import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Weights = ({ title, weights }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View>

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


            <TouchableOpacity onPress={() => setModalOpen(true) }>
                <View style={styles.item}>
                    <MaterialCommunityIcons 
                        name='weight-pound'
                        size={21}
                    />
                    <Text style={styles.itemText}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        marginTop: 20,
        marginHorizontal: 30,
        padding: 16,
        backgroundColor: 'grey',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 25,
        flexDirection: 'row'
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
        marginLeft: 10,
        fontSize: 20,
    }
})



export default Weights;