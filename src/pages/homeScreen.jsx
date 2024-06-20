import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.addItemButtonContainer}>
                <TouchableOpacity style={styles.addItemButton}>
                    <Text style={styles.addItemButtonText}>+</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1
    },
    addItemButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    addItemButton: {
        backgroundColor: 'dodgerblue',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    addItemButtonText: {
        fontSize: 20,
    }
})