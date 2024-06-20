import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import AddTaskScreen from './addTaskScreen';

export default function HomeScreen() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleAddItem = (taskTitle) => {
        const key = Math.floor(Math.random() * 100000000).toString(30);
        setTasks(prev => [...prev, { id: key, title: taskTitle }]);
    }

    const toggleModal = () => {
        setModalIsOpen(prev => !prev);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <View style={styles.taskItem}>
                        <Text>{item.title}</Text>
                    </View>
                }
            />
            <AddTaskScreen 
                isModalOpen={modalIsOpen} 
                onToggleModal={toggleModal} 
                handleAddItem={handleAddItem} 
            />
            <View style={styles.addItemButtonContainer}>
                <TouchableOpacity
                    style={styles.addItemButton}
                    onPress={toggleModal}
                >
                    <Text style={styles.addItemButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        padding: 20
    },
    taskItem: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        borderColor: '#ddd',
        borderWidth: 1,
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
        color: '#fff'
    }
});
