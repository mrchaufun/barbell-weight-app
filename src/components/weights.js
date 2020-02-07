import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Weights = ({ title, weights }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Alert.alert('Add:', `${weights}`, [
                {text: 'Understood'}
            ])}>
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
    }
})



export default Weights;